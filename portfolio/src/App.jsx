import React, { Component } from 'react'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import Typewriter from "./components/Typewriter";

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
          <div className="container">
            <p className="heroMeta heroEducation">
              University of Houston · B.S. Computer Science · Class of 2025
            </p>
            <h1 className="h1">
              Hi, I’m Will — a CS student{' '}
              <Typewriter
                words={[
                  'completeing projects.',
                  'cleaning data.',
                  'teaching models.',
                  'making routes.',
                  'remembering syntax.',
                ]}
                typingSpeed={75}
                deletingSpeed={45}
                pauseAtWord={900}
                loop
              />
            </h1>
            <p className="heroMeta heroLocation">
              Based in Cypress, Texas
            </p>
            <p className="lead">
              Hands‑on with JavaScript, Python, C++, React, and Node.js Comfortable with Git‑centric workflows and working in teams to make deadlines.
            </p>
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
