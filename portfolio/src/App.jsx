import React, { Component } from 'react'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Navbar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }))
  }

  render() {
    return (
      <>

        <Navbar />

        {/* Hero */}
        <section className="hero" id="home">
          <div className="barScene" aria-hidden="true">
            <div className="shelf shelfTop">
              <span className="bottle bottleTall" />
              <span className="bottle bottleRound" />
              <span className="bottle bottleShort" />
              <span className="mugPixel" />
            </div>
            <div className="shelf shelfLow">
              <span className="bottle bottleShort" />
              <span className="mugPixel" />
              <span className="bottle bottleTall" />
              <span className="bottle bottleRound" />
            </div>
            <div className="lantern lanternLeft" />
            <div className="lantern lanternRight" />
            <div className="candle candleLeft" />
            <div className="candle candleCenter" />
            <div className="candle candleRight" />
          </div>

          <div className="container heroCounter">
            <div className="noticeBoard">
              <p className="heroMeta heroEducation">
                University of Houston / B.S. Computer Science / Class of 2025
              </p>
              <h1 className="h1">William Stewart</h1>
              <p className="lead">
                Developer working with JavaScript, Python, C++, React, Node.js, data pipelines, and team-built systems.
              </p>
              <div className="heroStats" aria-label="Portfolio summary">
                <span>Location: Houston, TX</span>
                <span>Role: Developer</span>
                <span>Status: Working</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <main id="main">
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <small>© {new Date().getFullYear()} William Stewart.</small>
          </div>
        </footer>
      </>
    )
  }
}

export default App
