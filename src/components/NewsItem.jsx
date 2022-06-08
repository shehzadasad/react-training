import React, { Component } from 'react'
import '../App.css'

export class NewsItem extends Component {
  render() {
    let { title, description, imgSrc, source, newsURL, date, time } = this.props
    return (
      <div className=" my-3">
        <div id="cards" className="card shadow-lg">
          <img
            width={'300pt'}
            height={'200pt'}
            src={imgSrc}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className=" card-subtitle fst-italic text-info"> {source}</p>
            <p className=" card-subtitle fst-italic text-warning"> {time}</p>
            <p className=" card-subtitle fst-italic text-danger"> {date}</p>
            <p
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              className="card-text text-muted"
            >
              {description}...
            </p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
