import { useState } from 'react'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>

      <header className="header">
        <div className="container headerRow">
          <div className="brand">William Stewart</div>
          <nav aria-label="Primary" className={`nav ${menuOpen ? 'is-open' : ''}`}>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="menuBtn"
            >☰</button>
            <ul className={`navList ${menuOpen ? 'show' : ''}`}>
              <li><a href="#projects" className="navLink" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#skills" className="navLink" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" className="navLink" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li><a href="/resume/William_Stewart_Resume.pdf" download className="navLink" onClick={() => setMenuOpen(false)} aria-label="Download Resume (PDF)"t itle="Download Resume">Resume</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}