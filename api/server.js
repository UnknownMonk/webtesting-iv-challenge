const express = require('express');

const server = express();
const models = require('../models/models');
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send('hello');
});

server.post('/chars', async (req, res) => {
  try {
    res.status(201).json({ message: 'Let the schwartz be wit chuuuuu' });
  } catch (err) {
    res.status(500).json({ error: 'No schwartz for you! ' });
  }
});

server.delete('/chars/id;', async (req, res) => {
  try {
    const count = await models.remove(req.params.id);
    if (count > 0) {
      res.status(204).json({ message: 'Get the schwartz out of here  ' });
    }
  } catch (err) {
    res.status(500).json({ error: 'No schwartz for you! ' });
  }
});

module.exports = server;
