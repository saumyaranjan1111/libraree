// components/LoginPage.js
import React, { useState } from "react";
import "./LoginPage.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/catalog">Catalog</Link>
            </li> */}
            {/* <li>
              <Link to="/my-account">My Account</Link>
            </li> */}
          </ul>
        </nav>
        <div className="user-actions">
          {/* <button className="action-button">
            <Link to="/sign-in">Admin Login</Link>
          </button> */}
          {/* <button className="action-button">
            <Link to="/sign-up">Logout</Link>
          </button> */}
        </div>
      </header>


      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

    </div>
  );
}

export default LoginPage;
