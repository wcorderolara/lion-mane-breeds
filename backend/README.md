# LionMane - Dogs Breeds Project

This project corresponds to eval and validate the technical skills about Web technologies such as Angular and Node.js, whithin this document you will find:
- How to configure the Backend Project
- How to start the backend Project
- How to configure the Frontend Project
- How to start the Frontend Project

## Configure the Backend Project
The backend project will have the work to works like a proxy server, to avoid connect to the real API of the DOG API Project, will exists different routes to retrieve data, but only works if the user is logged in within the platform. The backes is build it usin Node.js, please follow the next steps to set up the project:

- As first step, you should download or clone the project (https://github.com/wcorderolara/lion-mane-breeds)
- After that, you should move to the backend folder within the project's folder
- Within *backend* proyect you have to execute: npm install, this will install all the dependencies for this project.


### Configure the Database
The backend project implements an SQL Database such as MySQL, this is to handle the creation of users, also to manage the favorites breeds for each user, to configure the database follow the next steps:

- Download and Install MySQL (https://dev.mysql.com/doc/refman/5.7/en/installing.html)
- (Optional) if you want, download and instsall MySQL Workbench (https://dev.mysql.com/doc/workbench/en/)
- After install MySQL will be necessary create a new user with password, for that, will be necessary execute the next commands:
```js
CREATE USER 'lionmane'@'localhost' IDENTIFIED BY 'd0gsBr33d2022';
GRANT ALL PRIVILEGES ON * . * TO 'lionmane'@'localhost';

CREATE DATABASE dogs_breeds;
```

After create and configure the database, within the backend folder execute the command
```js
npm run dev
```
this will start the project and start the database, and be ready to start to use it.