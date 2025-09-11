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
            <h1 className="h1">Hi, I’m Will - A CS student building real products.</h1>
            <p className="lead">
              Hands‑on with React, Node.js, and MySQL. Comfortable with Git‑centric workflows, 
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
