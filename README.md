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

![Screen Shot 2022-10-15 at 11 31 02 PM](https://user-images.githubusercontent.com/55030317/196019766-623547ae-ee86-4e1e-88f8-7e9214f03e88.png)

* To get all messages from a specific sender sent to a specific recipient in the last 30 days, make a `GET` request to `http://localhost:3000/messages/:recipient_id` (substituting the id number for `:recipient_id`), with a body containing a JSON of a sender_id (ex: `{"sender_id": 1}`).

![Screen Shot 2022-10-15 at 11 30 19 PM](https://user-images.githubusercontent.com/55030317/196019723-d98545c7-99db-44a1-bc26-ca50a6da7dfd.png)

* To send a message from one user to another, make a `POST` request to `http://localhost:3000/messages`, with a body containing a JSON of `sender_id, recipient_id, message_text` (ex:` {
    "sender_id": 1,
    "recipient_id": 2,
    "message_text": "This is another new message"
}`).

![Screen Shot 2022-10-15 at 11 33 50 PM](https://user-images.githubusercontent.com/55030317/196019909-1a309274-8c4d-4069-862f-9e65688b9ee2.png)

  

TODOs: 
 * production connection to DB
 * fix tests, create and drop test db automatically


Steps: 
npm install


createdb messenger_db
npx knex migrate:latest
npx knex seed:run
