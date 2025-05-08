import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/module.login.css";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/logIn", formData)
      .then((response) => {
        setMessage(`Login Successful! UserId: ${response.data.userId}`);
        setFormData({ email: "", password: "" });
        navigate(`/dashboard/${response.data.userId}`);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage(`Network Error, Please try again later..`);
        }
      });
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Log In</h1>
        {message && <p>{message}</p>}
        <Link to="/" className="login-home-link">
          Home
        </Link>
      </header>
      <main className="login-main">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-submit-btn">
            Log In
          </button>
          <p className="login-signin-prompt">
            Don't have an account?{" "}
            <Link to="/registration" className="login-signin-link">
              Registration
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
