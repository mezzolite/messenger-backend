const knexConfig = {
  development: {
    client: 'pg',
    connection:'postgresql://localhost/messenger_db',
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}

export default knexConfig
