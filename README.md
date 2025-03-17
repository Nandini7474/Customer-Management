# Customer Management Project

This project allows you to manage customer data with features like adding and deleting customers. The backend is simulated using **json-server**, and the frontend is built with **React**.

## Features
- Add new customers
- View a list of customers
- Delete customers

## Prerequisites

Make sure you have the following installed:
- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - comes with Node.js by default

### Backend (json-server)
The backend is simulated using **json-server** to mock the API. This provides a simple way to manage customer data using a JSON file.

### Frontend (React)
The frontend is built with **React**. It allows users to add and view customer data dynamically by making HTTP requests to the backend.

## Getting Started

Follow these steps to run the project locally:

### Step 1: Ensure the Backend is Running

1. **Navigate to the folder containing `db.json`** (the file that holds the customer data).
  ```bash
      cd Customer-Management-master
   
3. If you haven't installed `json-server` yet, you can install it globally with npm:

   ```bash
      npm install -g json-server
      json-server --watch db.json --port 5000


### Step 2: Install Dependencies for the Frontend in another terminal

1. **Navigate to the folder**  -
  ```bash
  cd Customer-Management-master
    cd frontend
    npm install axios react
    npm run dev 

