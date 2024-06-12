import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#81b1ce"}}>

        <div className="container-fluid">
        <a className="navbar-brand fw-bold">MERN</a>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link text-light bg-dark fw-bold btn btn-secondary"
        style={{ marginRight: '20px' }}>
          Create Post
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/all" className="nav-link text-light bg-dark fw-bold btn btn-secondary ">
          All Post
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
