const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
  findById
};

async function insert(item) {
  const [id] = await db('sbChars').insert(item);

  return db('sbChars')
    .where({ id })
    .first();
}

function remove(id) {
  return db('sbChars')
    .where({ id })
    .del();
}

function getAll() {
  return db('sbChars');
}

function findById(id) {
  return null;
}
