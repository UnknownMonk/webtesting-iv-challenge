const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send('hello');
});

server.post('/chars', async (req, res) => {
  try {
    res.status(201).json({ message: 'Hey yoooo' });
  } catch (err) {
    res.status(500).json({ error: 'No swarts for you! ' });
  }
});

module.exports = server;
