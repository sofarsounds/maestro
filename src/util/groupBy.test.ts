import groupBy from './groupBy';

describe('utils', () => {
  describe('groupBy', () => {
    it('groups an array by the given criteria function', () => {
      const cities = [
        { title: 'London', country: 'UK' },
        { title: 'Bristol', country: 'UK' },
        { title: 'Cardiff', country: 'UK' },
        { title: 'New York', country: 'US' },
        { title: 'Los Angeles', country: 'US' }
      ];

      const groups = groupBy(cities, o => o.country);

      expect(groups).toHaveProperty('UK', [cities[0], cities[1], cities[2]]);
      expect(groups).toHaveProperty('US', [cities[3], cities[4]]);
    });
  });
});
