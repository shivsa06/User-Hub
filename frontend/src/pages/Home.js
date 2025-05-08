import React from "react";
import { Link } from "react-router-dom";
import "../styles/module.home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>CRUD App</h1>
      </header>
      <main className="home-main">
        <h2>Welcome to our Application</h2>
        <p>Manage your data with ease. Register or Login to get started!</p>
        <div className="home-button-group">
          <Link to="/registration" className="home-btn home-register-btn">
            Register
          </Link>
          <Link to="/signIn" className="home-btn home-login-btn">
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
