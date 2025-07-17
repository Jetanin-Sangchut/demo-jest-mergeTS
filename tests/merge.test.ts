import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges and sorts correctly', () => {
    const c1 = [9, 7, 5];
    const c2 = [1, 3, 6];
    const c3 = [2, 4, 8];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('handles empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([9, 7], [], [])).toEqual([7, 9]);
    expect(merge([], [1, 3], [])).toEqual([1, 3]);
  });

  it('handles duplicates', () => {
    const result = merge([6, 4], [4, 5], [1, 4]);
    expect(result).toEqual([1, 4, 4, 4, 5, 6]);
  });

  it('handles negative numbers', () => {
    const result = merge([-1, -3], [-5, 0], [-2, 4]);
    expect(result).toEqual([-5, -3, -2, -1, 0, 4]);
  });
});
