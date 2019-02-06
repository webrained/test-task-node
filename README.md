# Getting started

To get the Node server running locally:

## Node app setup

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongo`
- `npm start` to start the local server, the project will run on `localhost:3000`

## MongoDB setup

- Open terminal 
- Run `use testTask` 
- To check your currently selected database, use the command `db`
- Run `db.clients.insert({"name": "Test", "email": "test@mail.com", "phone": "12345678", "providers": ["1", "2"]})`
- Run `db.providers.insert({"name": "Provider 1"})`

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models and index.js is what will be handling the data that's in our application. It should have access to a db object,
- `controllers/` - Remember the routes and how they were defined?  
