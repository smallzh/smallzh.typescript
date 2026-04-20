import { describe, it, expect } from 'vitest';

describe('Functions', () => {
  function overloadFn(x: number): string;
  function overloadFn(x: string): string;
  function overloadFn(x: any): string {
    return String(x);
  }

  function withDefaults(a: number, b: number = 2): number {
    return a + b;
  }

  it('overloads resolution at runtime', () => {
    expect(overloadFn(1)).toBe('1');
    expect(overloadFn('a')).toBe('a');
  });

  it('default parameters', () => {
    expect(withDefaults(3)).toBe(5);
    expect(withDefaults(3, 4)).toBe(7);
  });

  it('rest parameters and callbacks', () => {
    function joiner(sep: string, ...parts: string[]) {
      return parts.join(sep);
    }
    expect(joiner('-', 'a', 'b', 'c')).toBe('a-b-c');
  });

  it('this parameter and type inference in methods', () => {
    const obj = {
      v: 1,
      inc(this: typeof obj) { return this.v + 1; }
    } as any;
    expect(obj.inc()).toBe(2);
  });

  it('void return type', () => {
    function logHowAreYou(): void { console.log('hi'); }
    expect(typeof logHowAreYou).toBe('function');
  });
});
