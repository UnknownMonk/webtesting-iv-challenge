const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with 200 OK', () => {
      return request(server)
        .get('/')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
  });
  describe('POST/', () => {
    it('should respond created resourse', () => {
      return request(server)
        .post('/chars')
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it('shollud return created caracters', async () => {
      const char = { name: 'Prince Valian' };
      const response = await request(server)
        .post('/chars')
        .send(char);
      expect(response.body).toContaian('prince Valian');
    });
  });

  describe('DELETE/', () => {
    beforeEach(async () => {
      await db('sbChars').truncate();
      await db('sbChars').insert({ name: 'Dot Matrix' });
    });
    it('should return a del status code', async () => {
      const response = await request(server).delete('/chars/1');
      expect(response.status).toBe(204);
    });
    it('should respond with no content', async () => {
      const response = await request(server).delete('/chars/1');
      expect(response.body.message).toBeUndefined();
    });
  });
});
