const db = require('../data/dbConfig.js');
const Chars = require('./models');

describe('', () => {
  beforeEach(async () => {
    await db('sbChars').truncate();
  });

  describe('insert()', () => {
    it('should insert the provided sb char', async () => {
      await Chars.insert({ name: 'Helmet' });

      const Characters = await db('sbChars');
      expect(Characters).toHaveLength(3);
    });

    it('should insert the provided characters', async () => {
      let charters = await Chars.insert({ name: 'Yogurt' });
      expect(charters.name).toBe('Yogurt');

      charters = await Chars.insert({ name: 'sam' });
      expect(charters.name).toBe('sam');
    });
  });
});
