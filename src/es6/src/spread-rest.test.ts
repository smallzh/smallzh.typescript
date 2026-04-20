import { describe, it, expect } from 'vitest';

describe('Spread and Rest', () => {
  it('array spread creates a new array', () => {
    const a = [1, 2, 3];
    const b = [0, ...a, 4];
    expect(b).toEqual([0, 1, 2, 3, 4]);
  });

  it('object spread merges properties', () => {
    const o1 = { a: 1, b: 2 };
    const o2 = { ...o1, c: 3 };
    expect(o2).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('later spread properties override earlier ones', () => {
    const base = { x: 1, y: 2 };
    const override = { ...base, y: 99 };
    expect(override).toEqual({ x: 1, y: 99 });
  });

  it('rest parameters collect remaining arguments', () => {
    function takeAll(first: number, ...rest: number[]) {
      return { first, rest };
    }
    expect(takeAll(1, 2, 3)).toEqual({ first: 1, rest: [2, 3] });
  });

  it('rest in array destructuring', () => {
    const [head, ...tail] = [1, 2, 3, 4];
    expect(head).toBe(1);
    expect(tail).toEqual([2, 3, 4]);
  });

  it('rest in object destructuring', () => {
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    expect(a).toBe(1);
    expect(rest).toEqual({ b: 2, c: 3 });
  });

  it('spread in function call (apply-like)', () => {
    function sum(a: number, b: number, c: number) {
      return a + b + c;
    }
    const args = [1, 2, 3];
    expect(sum(...args)).toBe(6);
  });

  it('spread creates shallow copy', () => {
    const inner = { v: 1 };
    const arr = [inner];
    const copy = [...arr];
    expect(copy[0]).toBe(inner); // same reference = shallow
    expect(copy).not.toBe(arr); // different array reference
  });
});