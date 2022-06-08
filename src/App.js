import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from 'components/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              // @ts-ignore
              exact
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />

            <Route
              // @ts-ignore
              exact
              path="/"
              element={
                <>
                  <News />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    )
  }
}
