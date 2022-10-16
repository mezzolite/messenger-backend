/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express'
import controller from '../controllers/messages'

const router = express.Router()

router.get('/messages', controller.getAllMessages);
router.get('/messages/:recipient_id', controller.getMessagesForRecipient)
router.post('/messages', controller.sendMessage)

// @ts-ignore
export = router;