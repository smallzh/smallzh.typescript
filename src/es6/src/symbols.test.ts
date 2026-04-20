import { describe, it, expect } from 'vitest';

describe('Symbols', () => {
  it('Symbol creation and uniqueness', () => {
    const s1 = Symbol('x');
    const s2 = Symbol('x');
    expect(s1).not.toBe(s2);
    expect(typeof s1).toBe('symbol');
  });

  it('Symbol.for creates global shared symbols', () => {
    const a = Symbol.for('shared');
    const b = Symbol.for('shared');
    expect(a).toBe(b);
    expect(Symbol.keyFor(a)).toBe('shared');
  });

  it('Symbol.keyFor returns undefined for non-global symbols', () => {
    const local = Symbol('local');
    expect(Symbol.keyFor(local)).toBeUndefined();
  });

  it('symbol as object key', () => {
    const sym = Symbol('k');
    const obj: Record<symbol, number> = { [sym]: 123 } as any;
    expect(obj[sym]).toBe(123);
  });

  it('symbols are not enumerated by Object.keys', () => {
    const sym = Symbol('hidden');
    const obj = { a: 1, [sym]: 2 };
    expect(Object.keys(obj)).toEqual(['a']);
    expect(Object.getOwnPropertySymbols(obj)).toEqual([sym]);
  });

  it('Symbol.toStringTag customizes toString behavior', () => {
    const obj = {
      [Symbol.toStringTag]: 'MyCustom'
    };
    expect(Object.prototype.toString.call(obj)).toBe('[object MyCustom]');
  });

  it('Symbol.iterator makes objects iterable', () => {
    const iterableObj = {
      [Symbol.iterator]() {
        let step = 0;
        return {
          next() {
            step++;
            if (step <= 3) return { value: step, done: false };
            return { value: undefined, done: true };
          }
        };
      }
    };
    const result = [...iterableObj];
    expect(result).toEqual([1, 2, 3]);
  });

  it('Symbol.toPrimitive customizes type coercion', () => {
    const obj = {
      [Symbol.toPrimitive](hint: string) {
        if (hint === 'number') return 42;
        if (hint === 'string') return 'hello';
        return 99;
      }
    };
    expect(+obj).toBe(42);
    expect(`${obj}`).toBe('hello');
  });
});