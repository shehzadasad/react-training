import React, { Component } from 'react'

export class About extends Component {
  constructor() {
    super()
    document.title = 'NewsMonkey | About'
  }
  render() {
    return (
      <>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className=" fs-1 fw-bold">ABOUT</h2>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="/xyz" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="/ada" className="btn btn-secondary my-2 ms-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default About
