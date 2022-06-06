import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, src } = this.props
    return (
      <div>
        <div className="card shadow-lg">
          <img src={src} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Check News
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
