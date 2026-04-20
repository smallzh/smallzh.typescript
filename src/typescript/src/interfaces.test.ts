import { describe, it, expect } from 'vitest';

describe('Interfaces', () => {
  interface Person {
    id: number;
    name: string;
    age?: number;
  }

  interface ReadonlyPoint { readonly x: number; readonly y: number }

  it('basic interface usage', () => {
    const p: Person = { id: 1, name: 'Bob', age: 30 };
    expect(p.name).toBe('Bob');
  });

  it('readonly properties', () => {
    const pt: ReadonlyPoint = { x: 1, y: 2 };
    // @ts-expect-error - attempting to mutate should error at compile time
    // pt.x = 3;
    expect(pt.x).toBe(1);
  });

  it('index signatures', () => {
    interface StringMap { [k: string]: string }
    const m: StringMap = { a: 'alpha', b: 'beta' };
    expect(m['a']).toBe('alpha');
  });

  it('extending interfaces', () => {
    interface Address { city: string }
    interface User extends Person, Address { email: string }
    const u: User = { id: 2, name: 'Ana', city: 'NY', email: 'a@example.com' };
    expect(u.city).toBe('NY');
  });

  it('interface vs type alias and function type interface', () => {
    type ID = number;
    interface UserFn { (a: string): string }
    const f: UserFn = (s) => s.toUpperCase();
    expect(f('x')).toBe('X');
  });
});
