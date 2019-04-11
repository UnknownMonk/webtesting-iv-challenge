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
      return request(server).post();
    });
  });
});
