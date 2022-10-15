# messenger-backend
A simple messenger backend with Node.js and Typescript

Node version: 16.18.0

TODOs: 
 * production connection to DB


Steps: 
npm install

createdb messenger_db
npx knex migrate:latest
npx knex seed:run
