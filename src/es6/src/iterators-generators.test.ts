import { describe, it, expect } from 'vitest';

describe('Iterators and Generators', () => {
  it('for-of iterates over iterables', () => {
    const nums = [1, 2, 3];
    const result: number[] = [];
    for (const n of nums) result.push(n);
    expect(result).toEqual([1, 2, 3]);
  });

  it('custom iterable with Symbol.iterator', () => {
    const range = {
      from: 1,
      to: 5,
      [Symbol.iterator]() {
        return {
          current: this.from,
          last: this.to,
          next() {
            if (this.current <= this.last) {
              return { value: this.current++, done: false };
            }
            return { value: undefined, done: true };
          }
        };
      }
    };
    const result = [...range];
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('generator function yields values', () => {
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }
    expect(Array.from(gen())).toEqual([1, 2, 3]);
  });

  it('generator delegation with yield*', () => {
    function* inner() {
      yield 'a';
      yield 'b';
    }
    function* outer() {
      yield 0;
      yield* inner();
      yield 1;
    }
    expect(Array.from(outer())).toEqual([0, 'a', 'b', 1]);
  });

  it('generator return value', () => {
    function* genWithReturn() {
      yield 1;
      return 'done';
    }
    const g = genWithReturn();
    expect(g.next()).toEqual({ value: 1, done: false });
    expect(g.next()).toEqual({ value: 'done', done: true });
  });

  it('generator with spread and destructuring', () => {
    function* gen() {
      yield 10;
      yield 20;
      yield 30;
    }
    const [first, ...rest] = gen();
    expect(first).toBe(10);
    expect(rest).toEqual([20, 30]);
  });

  it('generator can receive values via next()', () => {
    function* gen() {
      const x = yield 1;
      return x * 2;
    }
    const g = gen();
    g.next();           // { value: 1, done: false }
    const result = g.next(5); // pass 5 back in, x = 5, return 10
    expect(result.value).toBe(10);
    expect(result.done).toBe(true);
  });

  it('string is iterable', () => {
    const chars = [...'abc'];
    expect(chars).toEqual(['a', 'b', 'c']);
  });
});