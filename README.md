# Employee Management System For Organization

The Employee Manager System is designed to manage information about admins, departments and employees within an organization. This system provides a set of  API endpoints to perform **CRUD** operations _( Create, Read, Update, Delete )_ on these entities. Each entity is managed through its own set of routes, ensuring a modular and maintainable codebase.


# Installation and Getting started
To get the Node server running locally:

## Scripts For Frontend

- Clone this repo then **cd _project_name_**
- `npm install or npm i` to install all required dependencies
- `npm run dev` to start the local server 
  -The application will start on `http://localhost:5173`.
- `npm run build` it builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.



## Scripts For backend Folder

- `cd backend` : The path to the backend folder.
- `npm install or npm i`: Installing backend dependencies.
- `npm run db:init`: Initialize the database with dummy data.
- `npm run dev`: Start the server in development mode with Nodemon on `http://localhost:3000/`.

## Features

- Manage Organization Tasks
- Add new Employees, Departments and Administrators
- Edit Employees details as salary, organization email, password and department 
- Delete old employees
- Responsive Design

# Code Overview

## Dependencies

This project uses the following dependencies:

- `bootstrap`: ^5.3.3
- `bootstrap-icons`: ^1.11.3
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.23.1


## Dev Dependencies

This project uses the following development dependencies:

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react-swc`: ^3.5.0
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `vite`: ^5.2.0
