import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/module.registration.css";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    state: "",
    course: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        setMessage(
          `${response.data.message} and User ID:  ${response.data.userId}`
        );
        console.log(`${response.data.message}`);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          state: "",
          course: "",
        });
      })
      .catch((error) => {
        if (error.response) {
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage(`Network Error: Please try again later`);
        }
      });
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Register</h1>
        {message && <p>{message}</p>}
        <Link to="/" className="register-home-link">
          Home
        </Link>
      </header>
      <main className="register-main">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="mobileNo">Mobile No: </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="state">State: </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-group">
            <label htmlFor="course">Course: </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-submit-btn">
            Register
          </button>
          <p className="register-login-prompt">
            Already have an account ?{" "}
            <Link to="/signIn" className="register-login-link">
              Login
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Registration;
