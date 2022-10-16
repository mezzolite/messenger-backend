import request from 'supertest'
import knex from '../../knex/knex'
import app from '../../src/server'

describe('messagesRoutes', () => {
  describe('getAllMessages', () => {
    beforeEach((done) => {
      knex.migrate.latest()
          .then(() => {
              return knex.seed.run({specific: 'create_users.ts'});
          })
          .then(() => {
              return knex.seed.run({specific: 'create_messages.ts'});
          })
          .then(() => done())
    });

    afterEach((done) => {
      knex.migrate.rollback()
          .then(() => done())
    })
    
    it('should get all messages in the db that are newer than 30 days', async () => {
      const response = await request(app).get('/messages')
      expect(response.body.length).toBe(7)
    });

    it('should get all messages sent to a recipient from a specific user', async () => {
      const response = await request(app).get('/messages/1').send({sender_id: 2})
      expect(response.body.length).toBe(3)
    });
    
    it('should add a message to the db', async () => {
      const response = await request(app).post('/messages').send({
        sender_id: 1,
        recipient_id: 2,
        message_text: 'test message'
      })
      expect(response.body.message).toBe('Message sent')
    });
  });
  
});

