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
    it('shollud return created caracters', () => {
      const char = {name: 'Prince Valian'}
      const response = await request(server).post('/chars').send(char)
      expect(response.body).toContaian('prince Valian')
    });
  });

  describe('DELETE/', () => {
    it('should return a del status code', () => {
      return request(server)
        .del('/chars')
        .then(res => {
          expect(res.status).toBe(202);
        });
    });
    it('should delete a charter', () => {
      const char = {name: 'Prince Valian'}
      const response = await request(server).del('/chars').remove(char)
      expect(response.body).toBe(null)
    });
  });
});
