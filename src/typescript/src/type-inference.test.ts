import { describe, it, expect } from 'vitest';

describe('Type Inference', () => {
  it('infers literals', () => {
    const a = 10; // number
    const b = 'str'; // string
    expect(typeof a).toBe('number');
    expect(typeof b).toBe('string');
  });

  it('contextual typing', () => {
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, v) => acc + v, 0);
    expect(sum).toBe(6);
  });

  it('best common type in array', () => {
    const arr = [1, 2, 3] as const;
    type T = typeof arr[number];
    const v: T = 1;
    expect(v).toBe(1);
  });
});
