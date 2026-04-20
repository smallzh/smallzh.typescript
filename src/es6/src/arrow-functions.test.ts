import { describe, it, expect } from 'vitest';

describe('Arrow functions', () => {
  it('implicit return and single expression syntax', () => {
    const double = (n: number) => n * 2;
    expect(double(3)).toBe(6);
  });

  it('lexical this binding in arrow functions', () => {
    const obj = {
      v: 10,
      get: function() {
        return () => this.v;
      }
    };
    expect(obj.get()()).toBe(10);
  });

  it('arrow function has no prototype and cannot be used as constructor', () => {
    const A = () => {};
    expect((A as any).prototype).toBeUndefined();
    expect(() => {
      // @ts-ignore
      new A();
    }).toThrow();
  });

  it('callback usage with map preserves this when using arrow', () => {
    const arr = [1, 2, 3];
    const ctx = { factor: 2 };
    const res = arr.map((n) => n * ctx.factor);
    expect(res).toEqual([2, 4, 6]);
  });

  it('parentheses around single parameter are optional', () => {
    const f = x => x + 1;
    expect(f(1)).toBe(2);
  });

  it('arrow functions in callbacks preserve this in enclosing scope', () => {
    const o = {
      count: 0,
      run() {
        [1,2,3].forEach(() => { this.count++; });
        return this.count;
      }
    };
    expect(o.run()).toBe(3);
  });
});
