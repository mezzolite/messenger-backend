import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: "aolLOL", first_name: "Sylvan", last_name:'Charney' },
        { id: 2, username: "ilovesms", first_name: "Luna", last_name:'Moona' },
        { id: 3, username: "tumblrasks5ever", first_name: "Tumblerina", last_name:'Fettuccini' },
    ]);
}
