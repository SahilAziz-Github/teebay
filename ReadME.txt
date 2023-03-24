FRONTEND: 


Files are in the folder named "Teebay". Runs on localhost:3000 port. The coding is done using React Javascript. The description of the files are as follows-

Login Feature:

Login.js: This file will contain the login form component and handle the login functionality.
LoginForm.js: This file will contain the input fields and submit button for the login form.
Login.css: This file will contain the styles for the login form.

Registration Feature:

Registration.js: This file will contain the registration form component and handle the registration functionality.
RegistrationForm.js: This file will contain the input fields and submit button for the registration form.


Home Page Feature:

HomePage.js: This file will contain the Home page component which will be the landing page for the user after successful login. This file will contain the navigation bar component which will have buttons to go to different pages. 
Business.js: This page will show all the transactions made of different products
Dashboard.js: This file will show all the products that the user have added to their account for renting/selling.
Rent.js: This file will show all the products that have been rented currently.
Sell.js: This file will show all the products sold.

Add Products Feature: 

Title.js: User can input the title of the product here.
Category.js: User can select the category of the product here.
Description.js: User can prodive the description of the product here.
Price.js: User can input the selling and renting price here.
Summary.js: A final summary of all the details of the product is shown here before adding to the system.





BACKEND: 

Node.js has been used. Database is Postgresql.Files are in folder named "Express-Crash". Runs on localhost:3333/graphql. 

app.js: Firstly the graphql module and the various GraphQL data types are imported. next the @prisma/client module is imported which is an ORM, new instance of prisma client is created. This GraphQL server defines a schema with two main types USER and PRODUCT. It connects to a database using Prisma Client to perform CRUD operations

schema.prisma: This file is used by the Prisma CLI to generate the client-side code for interacting with the database based on the data model defined in this file. The command used in terminal is "prisma db pull" and the data model of the database is pulled in the file.

server.js: A simple server setup using Express.js that listens to incoming requests on port 6969. It uses the "express-graphql" middleware to handle GraphQL queries and mutations.





NOTES:

1. The project is not complete and frontend is not connected with backend.
2. Apollo Cache has not been used while it should've been.
3. For the backend application to run you have to have postgresql installed locally and database created.  
