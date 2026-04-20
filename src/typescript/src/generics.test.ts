import { describe, it, expect } from 'vitest';

describe('Generics', () => {
  function identity<T>(arg: T): T { return arg; }
  interface Box<T> { value: T }
  class Container<T> { constructor(public value: T) {} }
  interface Lengthwise { length: number }
  function getLength<T extends Lengthwise>(t: T): number { return t.length; }

  it('generic function and interface', () => {
    expect(identity<number>(5)).toBe(5);
    const b: Box<string> = { value: 'air' };
    expect(b.value).toBe('air');
  });

  it('generic class', () => {
    const c = new Container<number>(42);
    expect(c.value).toBe(42);
  });

  it('generic constraints and keyof', () => {
    const arr = ['a', 'b', 'c'] as const;
    type IDX = keyof typeof arr;
    const i: IDX = 1 as any;
    expect(typeof i).toBe('number');
  });

  it('default type parameters and conditional types', () => {
    type Optional<T = string> = T | undefined;
    const v: Optional = undefined;
    expect(v).toBeUndefined();
  });
});
