import { describe, it, expect } from 'vitest';

describe('Destructuring', () => {
  it('object destructuring with defaults and renaming', () => {
    const obj = { a: 1, b: 2 };
    const { a: x = 0, b: y } = obj;
    expect(x).toBe(1);
    expect(y).toBe(2);
  });

  it('array destructuring and nested structures', () => {
    const arr = [1, [2, 3]];
    const [a, [b, c]] = arr;
    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it('default values in destructuring', () => {
    const { z = 5 } = {} as any;
    expect(z).toBe(5);
  });

  it('rest in destructuring', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = obj;
    expect(a).toBe(1);
    expect(rest).toEqual({ b: 2, c: 3 });
  });

  it('destructuring in function parameters', ( ) => {
    function demo({ a, b }: { a: number; b: number; }) {
      return a + b;
    }
    expect(demo({ a: 2, b: 3 })).toBe(5);
  });

  it('computed property names in destructuring', () => {
    const key = 'value';
    const obj = { [key]: 42 };
    const { value } = obj as any;
    // Since property name is dynamic, we access via bracket
    const v = obj["value"];
    expect(v).toBe(42);
  });
});
