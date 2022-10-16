import knex from '../../knex/knex'
import {Request, Response} from 'express'

const database = knex

interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  messageText: string;
  createdAt: Date;
  updatedAt: Date;
}

const todaysDate = new Date()
const thirtyDaysAgo = new Date(new Date().setDate(todaysDate.getDate() - 30))

export function getAllMessages(req: Request, res: Response) {
  return database('messages')
    .whereBetween('created_at', [thirtyDaysAgo, todaysDate] )
    .limit(100)
    .then(results => res.send(results) )
}

export function getMessagesForRecipient(req: Request, res: Response) {
  return database('messages')
    .where('recipient_id', req.params.recipient_id)
    .where('sender_id', req.body.sender_id)
    .whereBetween('created_at', [thirtyDaysAgo, todaysDate])
    .limit(100)
    .then(results => res.send(results))
}

export function sendMessage(req: Request, res: Response) {
  return database('messages')
    .insert(
      {
        sender_id: req.body.sender_id,
        recipient_id: req.body.recipient_id,
        message_text: req.body.message_text
      }
    )
    .then(() => res.status(200).json({
      message: "Message sent"
    }))
}

export default {
  getAllMessages,
  getMessagesForRecipient,
  sendMessage
}



