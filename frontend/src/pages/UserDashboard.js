import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/./module.dashboard.css";

const UserDashboard = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard: userId from useParams:", userId);
    if (!userId || isNaN(userId)) {
      console.error("Invalid userId:", userId);
      setMessage("Invalid user ID. Please try again.");
      return;
    }
    axios
      .get(`http://localhost:5000/user/${userId}`)
      .then((response) => {
        setUserData(response.data.user);
        setMessage("User details loaded successfully");
      })
      .catch((error) => {
        if (error.response) {
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage("Network error. Please try again.");
        }
      });
  }, [userId]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleDeleteProfile = () => {
    if (!window.confirm("Are you sure you want to delete your profile?")) {
      return;
    }
    console.log(`Deleting profile for UserId: ${userId}`);
    axios
      .delete(`http://localhost:5000/deleteProfile/${userId}`)
      .then((response) => {
        console.log("Delete response: ", response.data);
        setMessage("Profile Deleted Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("Delete Error: ", error.message, error.response?.data);
        if (error.response) {
          setMessage(`Error: ${error.response.data.error}`);
        } else {
          setMessage("Network Error, Please try again");
        }
      });
  };

  if (!userData) {
    return <div>{message || "Loading..."}</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/" className="dashboard-nav-link">
            Home
          </Link>
          <Link to="/registration" className="dashboard-nav-link">
            Register
          </Link>
          <Link to="/signIn" className="dashboard-nav-link">
            Login
          </Link>
          <Link to={`/editProfile/${userId}`} className="dashboard-nav-link">
            Edit Profile
          </Link>
          <button className="dashboard-logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <button
            className="dashboard-delete-btn"
            onClick={handleDeleteProfile}
          >
            Delete Profile
          </button>
        </nav>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-user-details">
          <h2>User Dashboard</h2>
          <p>{message}</p>
          <h3>User Details</h3>
          <div className="dashboard-details-card">
            <p>
              <strong>Name: </strong>
              {userData.firstName} {userData.lastName}
            </p>
            <p>
              <strong>Email: </strong>
              {userData.email}
            </p>
            <p>
              <strong>Mobile: </strong>
              {userData.mobileNo}
            </p>
            <p>
              <strong>State: </strong>
              {userData.state}
            </p>
            <p>
              <strong>Course: </strong>
              {userData.course}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
