# Simple Messenger App
A simple messenger backend with Node.js and Typescript

## Pre-requisites
* Node version: > 10.9.1, 16.18.0 recommended
  * [Use this link to install](https://nodejs.org/en/download/)
* Postman: free app used for testing API
  * [Postman download link](https://www.postman.com/downloads/)
  
## Set-up
* Clone this repo onto your machine
* `cd` into the top level of the repo: `/messenger-backend`
* Run `npm install` - installs dependencies and libraries
* Run `createdb messenger_db` - creates postgresql database
* Run `npx knex migrate:latest` - runs migrations to create `users` and `messages` tables
* Run `npx knex seed:run` - adds pre-created users and some messages to the tables
* Run `npm run dev` - starts the API

## Using the API
Currently the API can be tested using Postman.
* To get all messages in the database from the last 30 days, make a `GET` request to `http://localhost:3000/messages`. No params or body are necessary.
![Screen Shot 2022-10-15 at 11 22 17 PM](https://user-images.githubusercontent.com/55030317/196019578-6f6983af-fdd1-4f8f-b284-732df18ca970.png)
  

TODOs: 
 * production connection to DB
 * fix tests, create and drop test db automatically


Steps: 
npm install


createdb messenger_db
npx knex migrate:latest
npx knex seed:run
