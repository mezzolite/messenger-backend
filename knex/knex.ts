import Knex from 'knex';
import knexConfig from '../knexfile';

const environment = process.env.ENVIRONMENT || 'development'
// @ts-ignore
const knex = Knex(knexConfig[environment])

export default knex