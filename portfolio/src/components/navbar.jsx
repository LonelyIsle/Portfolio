import { useState } from 'react'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Skip link for a11y */}
      <a href="#main" className="skip">Skip to content</a>

      <header className="header">
        <div className="container headerRow">
          <div className="brand">William Stewart</div>
          <nav aria-label="Primary" className="nav">
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
              className="menuBtn"
            >☰</button>
            <ul className={`navList ${menuOpen ? '' : 'navListHidden'}`}>
              <li><a href="#projects" className="navLink">Projects</a></li>
              <li><a href="#skills" className="navLink">Skills</a></li>
              <li><a href="#contact" className="navLink">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}