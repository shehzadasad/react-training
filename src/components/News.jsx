import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className=" container">
        <h2 className=" fs-1 fw-bold my-5 text-center">
          {'{NewsMonkey - Top Headlines}'}
        </h2>
        <div className=" row justify-content-center p-4">
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="News Title"
              description="News Description"
              src=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default News
