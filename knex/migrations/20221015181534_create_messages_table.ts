import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary();
    table.integer('sender_id').notNullable();
    table.foreign('sender_id').references('users.id')
    table.integer('recipient_id').notNullable();
    table.foreign('recipient_id').references('users.id')
    table.string('message_text').notNullable()
    table.timestamps(true, true)
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('messages')
}

