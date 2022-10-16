import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("messages").del();

    const dateTooLongAgo = new Date(new Date().setDate(new Date().getDate() - 40))
    // Inserts seed entries
    await knex("messages").insert([
        { id: 1001, sender_id: 1, recipient_id: 2, message_text: "Come here often?" },
        { id: 1002, sender_id: 1, recipient_id: 2, message_text: "Let's go to Milk." },
        { id: 1003, sender_id: 1, recipient_id: 2, message_text: "What did we do last night? Where are my bows?" },
        { id: 1004, sender_id: 2, recipient_id: 1, message_text: "Lol goth" },
        { id: 1005, sender_id: 2, recipient_id: 1, message_text: "The girl in the bathroom needed them." },
        { id: 1006, sender_id: 1, recipient_id: 3, message_text: "They look prettier on you" },
        { id: 1007, sender_id: 3, recipient_id: 2, message_text: "have you heard that Neil Gaiman is on Tumblr?" },
        { id: 1008, sender_id: 3, recipient_id: 2, message_text: "This message is tooooo old", created_at: dateTooLongAgo },
        { id: 1009, sender_id: 1, recipient_id: 2, message_text: "This message is tooooo old", created_at: dateTooLongAgo },
        { id: 1010, sender_id: 2, recipient_id: 1, message_text: "This message is tooooo old", created_at: dateTooLongAgo },
        { id: 1011, sender_id: 3, recipient_id: 1, message_text: "This message is tooooo old", created_at: dateTooLongAgo },
    ]);
}
