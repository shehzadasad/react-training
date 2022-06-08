import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PulseLoader from 'react-spinners/PulseLoader'
import dateFormat from 'dateformat'

export class News extends Component {
  constructor() {
    super()
    console.log('News Component constructor says hello to you! <3')
    this.state = {
      items: [],
      detailsLoaded: false,
    }
    AOS.init({
      duration: 2000,
      offset: 200,
      delay: 0,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
    document.title = 'NewsMonkey | News'
  }

  async componentDidMount() {
    await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=af7f02c88a1442a0a2405dd55cea4545',
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          items: json.articles,
          detailsLoaded: true,
        })
      })
  }

  render() {
    const { detailsLoaded, items } = this.state
    if (!detailsLoaded)
      return (
        <>
          <div className="container p-5">
            <div className="row justify-content-center align-items-center p-5">
              <div className="col-12 text-center">
                <PulseLoader color={'blue'} size={25} margin={3} />
              </div>
            </div>
          </div>
        </>
      )
    return (
      <div className=" container">
        <h2 className=" fs-1 fw-bold mt-5 text-center">
          NewsMonkey - Top Headlines
        </h2>
        <div className=" row justify-content-center p-5">
          {items.map((element) => {
            return (
              <div
                data-aos="fade-up"
                key={element.description ? element.description : ''}
                className="col-md-3"
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 88) : ''
                  }
                  imgSrc={
                    element.urlToImage
                      ? element.urlToImage
                      : 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='
                  }
                  newsURL={element.url ? element.url : ''}
                  date={
                    // element.publishedAt ? element.publishedAt.slice(0, 10) : ''
                    element.publishedAt
                      ? dateFormat(element.publishedAt, 'mmmm dS, yyyy')
                      : ''
                  }
                  source={element.source ? element.source.name : ''}
                  time={
                    // element.publishedAt ? tConvert(element.publishedAt.slice(11, 16)): ''
                    element.publishedAt
                      ? new Date(element.publishedAt).toLocaleTimeString()
                      : ''
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
