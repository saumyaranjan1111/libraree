import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="action-button"><Link to="/login">Admin Login</Link></button>
          <button className="action-button"><Link to="/sign-up">Create Admin</Link></button>
        </div>
      </header>
      <section className="hero">
        <h1>Welcome to Our Library</h1>
        <p>Explore a world of knowledge through our extensive collection of books.</p>
        <Link to="/books" className="cta-button">Explore Catalog</Link>
      </section>
    </div>
  )
}

export default Home