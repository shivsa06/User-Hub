import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/module.editProfile.css";

const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!userId || userId.includes("localhost") || isNaN(userId)) {
      console.error("Invalid userId:", userId);
      setMessage("Invalid user ID. Please try again.");
      return;
    }
    console.log("Edit Profile: Fetching user data for ID:", userId);
    const apiUrl = `http://localhost:5000/user/${userId}`;
    console.log("Get URL: ", apiUrl);
    console.log(`Fetching Data for ID: ${userId}`);
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Get Response: ", response.data);
        setFormData(response.data.user);
        setMessage("User Details Loaded Successfully");
      })
      .catch((error) => {
        console.log("Get Error", error);
        if (error.response) {
          console.log("Error Coming");
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage("Network Error, Please try again");
        }
      });
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || userId.includes("localhost") || isNaN(userId)) {
      console.error("Invalid userId on submit:", userId);
      setMessage("Invalid user ID. Please try again.");
      return;
    }
    console.log("Submitting Form with Data", formData);
    const apiUrl = `http://localhost:5000/editProfile/${userId}`;
    console.log("PUT URL: ", apiUrl);
    axios
      .put(apiUrl, formData)
      .then((response) => {
        console.log("PUT response:", response.data);
        setMessage("Profile updated successfully");
        navigate(`/dashboard/${userId}`);
      })
      .catch((error) => {
        console.error("PUT error:", error.message, error.response?.data);
        if (error.response) {
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage("Network error. Please try again.");
        }
      });
    console.log("Updated Profile Data", formData);
  };

  return (
    <div className="editprofile-container">
      <header className="editprofile-header">
        <h1>Edit Profile</h1>
        {message && <p>{message}</p>}
        <nav className="editprofile-nav">
          <Link to="/" className="editprofile-nav-link">
            Home
          </Link>
          <Link to="/registration" className="editprofile-nav-link">
            Register
          </Link>
          <Link to="/signIn" className="editprofile-nav-link">
            Login
          </Link>
          <Link to={`/dashboard/${userId}`} className="editprofile-nav-link">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="editprofile-main">
        <form className="editprofile-form" onSubmit={handleSubmit}>
          <h2>Update Your Profile</h2>
          <div className="editprofile-form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="editprofile-form-group">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="editprofile-submit-btn">
            Update Profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
