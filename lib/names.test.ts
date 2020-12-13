import { normalizeName } from './names';

describe('names', () => {
  describe('normalizeName', () => {
    it('should return the name without the female symbol if the input does not have it', () => {
      const result = normalizeName('foo♀', 'bar');
      expect(result).toBe('foo');
    });

    it('should return the name without the male symbol if the input does not have it', () => {
      const result = normalizeName('foo♂', 'bar');
      expect(result).toBe('foo');
    });
  });
});
