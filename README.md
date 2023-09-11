# REST API for Managing Persons

This is a simple REST API built with NestJS and MongoDB for managing persons. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Modeling (Bonus)](#database-modeling-bonus)
    - [UML Diagram](#uml-diagram)
- [Documentation](#documentation)
- [Testing](#testing)

## Prerequisites
Before getting started, ensure you have the following installed on your system:
- Node.js and npm (Node Package Manager)
- MongoDB (You can install it locally or use a cloud-based MongoDB service)

## Installation
Follow these steps to set up and run the project:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/nestjs-mongodb-persons.git
   ```
   
2. Navigate to the project directory 
   ```bash
   cd task 2
   ```
3. Run the following command to install dependencies:
   ```bash
   npm install
   ```
   
4. Create a .env file in the project root and configure your MongoDB connection:
   ```bash
   DB_URL=mongodb://localhost:27017/hngT2
   PORT=3000
   ```

5. Run the following command to start the server:
   ```bash
   npm run start
   ```

Your NestJS server should now be running at http://localhost:3000.

## Usage