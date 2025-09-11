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
          <div className="container">
            <h1 className="h1">Hi, I’m William — CS student building real products.</h1>
            <p className="lead">
              Hands‑on with React, Node.js, and MySQL. Comfortable with REST APIs, Git‑centric workflows, and shipping.
            </p>
            <div className="ctaRow">
              <a href="#projects" className="btn btn-primary">See projects</a>
              <a href="mailto:d.j.stewart7873@gmail.com" className="btn btn-outline">Email me</a>
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
