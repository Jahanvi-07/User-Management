# User Management System

A simple **User Management System** built with Node.js, Express, and MongoDB. This application allows basic CRUD (Create, Read, Update, Delete) operations for managing users, including registration, login, and profile management.


## Features

* **User Registration**: Create a new user account with name, email, and password.
* **User Login**: Authenticate users with email and password.
* **CRUD Operations**: Add, view, edit, and delete users.
* **Form Validation**: Basic input validation for secure data handling.
* **MongoDB Integration**: Stores user information securely in a MongoDB database.


## Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ORM)
* **Frontend**: HTML, CSS, JavaScript
* **Other Tools**: dotenv for environment variables, bcrypt for password hashing


## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Jahanvi-07/User-Management.git
   ```

2. **Install dependencies**

   ```bash
   cd User-Management
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the server**

   ```bash
   npm start
   ```

5. Open your browser and go to: `http://localhost:5000`


## Usage

* Register a new user via the registration form.
* Log in with the registered credentials.
* View all users in the system.
* Edit or delete users as needed.


## Screenshot
<img width="1011" height="1012" alt="Image" src="https://github.com/user-attachments/assets/8bac009e-bf17-4bc6-9f64-d25ba542a825" />
