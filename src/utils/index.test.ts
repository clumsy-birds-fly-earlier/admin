import { sum } from '.';

describe('utils', () => {
  it('sum should work', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
