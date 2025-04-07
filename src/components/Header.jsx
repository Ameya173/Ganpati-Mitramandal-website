"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Moraj Ganeshotsav Mandal</h1>
          </Link>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

