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
    .then(results => res.send(results) )
}

export function getMessagesForRecipient() {
  console.log('getMessagesForRecipient')
}

export function sendMessage() {
  console.log('sendMessage')
}

export default {
  getAllMessages,
  getMessagesForRecipient,
  sendMessage
  }



