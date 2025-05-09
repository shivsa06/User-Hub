UserHub
UserHub is a full-stack user management application built with React Vite, Express.js, and MySQL. It enables users to register, log in, view/edit profiles, and delete accounts through a responsive, user-friendly interface. Featuring modular backend routes and an organized frontend, UserHub is a scalable CRUD app ideal for learning and showcasing web development skills.
Features

User registration, login, profile view/edit, and account deletion.
Responsive UI with CSS modules for scoped styling.
RESTful API with modular Express routes.
MySQL database integration for persistent data.

Tech Stack

Frontend: React.js, React Router, Axios, CSS Modules
Backend: Express.js, MySQL, dotenv
Database: MySQL (users table)

Getting Started
Prerequisites

Node.js (v16+)
MySQL (v8+)
Git

Installation

Clone the repo:
git clone https://github.com/shivsa06/User-Hub.git
cd User-Hub

Setup backend:
cd backend
npm install express cors mysql2 dotenv nodemon

Create backend/.env:
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=crud_app
DB_PORT=3306

Setup MySQL:
CREATE DATABASE crud_app;
USE crud_app;
CREATE TABLE studentInfo (
id INT AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(255),
lastName VARCHAR(255),
email VARCHAR(255) UNIQUE,
mobile VARCHAR(20),
password VARCHAR(255),
state VARCHAR(255),
course VARCHAR(255)
);

Run backend:
npm run dev

Setup frontend:
cd ../frontend
npm install react-router-dom axios
npm run dev

Usage

Open http://localhost:3000.
Register at /registration.
Login at /signIn.
View/edit profile at /dashboard/:userId or /editProfile/:userId.
Delete account from dashboard.

API Endpoints

Method
Endpoint
Description

POST
/register
Register a user

POST
/login
Authenticate a user

GET
/user/:id
Fetch user details

PUT
/editProfile/:id
Update profile

DELETE
/deleteProfile/:id
Delete account

Future Improvements :-
Implement bcrypt for secure password hashing.
Add JWT authentication for protected routes.
Integrate Redux for frontend state management.
Develop an admin panel for user management.
