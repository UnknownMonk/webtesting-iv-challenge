exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sbChars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('sbChars').insert([
        { name: 'Barf' },
        { name: 'Pizza the Hutt' },
        { name: 'Yogurt' },
        { name: 'Lonstarr' },
        { name: 'Sgt. Asshole' },
        { name: 'Major Asshole' }
      ]);
    });
};
