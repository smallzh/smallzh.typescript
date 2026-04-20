import { describe, it, expect } from 'vitest';

describe('Basic Types', () => {
  it('numbers: integer and float', () => {
    const n: number = 42;
    const m: number = 3.14;
    expect(n).toBe(42);
    expect(m).toBeCloseTo(3.14);
  });

  it('strings and templates', () => {
    const s: string = 'hello';
    expect(s.toUpperCase()).toBe('HELLO');
  });

  it('booleans and truthiness', () => {
    const t: boolean = true;
    const f: boolean = false;
    expect(t).toBeTruthy();
    expect(f).toBeFalsy();
  });

  it('null and undefined', () => {
    const a: null = null;
    const u: undefined = undefined;
    expect(a).toBeNull();
    expect(u).toBeUndefined();
  });

  it('arrays and tuples', () => {
    const arr: number[] = [1, 2, 3];
    const tpl: [string, number] = ['foo', 7];
    expect(arr.length).toBe(3);
    expect(tpl[0]).toBe('foo');
    expect(tpl[1]).toBe(7);
  });

  it('enum runtime values', () => {
    enum Color { Red, Green = 3, Blue = 5 }
    expect(Color.Red).toBe(0);
    expect(Color.Green).toBe(3);
    expect(Color.Blue).toBe(5);
  });

  it('any vs unknown is runtime-equivalent here', () => {
    let a: any = 'x';
    a = 123;
    const b: unknown = a;
    // runtime check: cannot access properties without narrowing
    expect(typeof b).toBe('number');
  });

  it('never is a bottom type in tests (unreachable code simulation)', () => {
    function fail(): never { throw new Error('boom'); }
    expect(() => fail()).toThrow();
  });
});
