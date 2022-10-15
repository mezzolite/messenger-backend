import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("messages").del();

    // Inserts seed entries
    await knex("messages").insert([
        { id: 1, sender_id: 1, recipient_id: 2, message_text: "Come here often?" },
        { id: 2, sender_id: 1, recipient_id: 2, message_text: "Let's got to Milk." },
        { id: 3, sender_id: 1, recipient_id: 2, message_text: "What did we do last night? Where are my bows?" },
        { id: 4, sender_id: 2, recipient_id: 1, message_text: "Lol goth" },
        { id: 5, sender_id: 2, recipient_id: 1, message_text: "The girl in the bathroom needed them." },
        { id: 6, sender_id: 1, recipient_id: 3, message_text: "They look prettier on you" },
        { id: 7, sender_id: 3, recipient_id: 2, message_text: "have you heard that Neil Gaiman is on Tumblr?" },
    ]);
}
