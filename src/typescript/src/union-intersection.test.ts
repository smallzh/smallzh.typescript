import { describe, it, expect } from 'vitest';

describe('Union and Intersection Types', () => {
  it('union types allow values of different types', () => {
    let value: string | number;
    value = 'hello';
    expect(typeof value).toBe('string');
    value = 42;
    expect(typeof value).toBe('number');
  });

  it('intersection types combine multiple types', () => {
    type A = { name: string };
    type B = { age: number };
    type Person = A & B;
    const person: Person = { name: 'Alice', age: 30 };
    expect(person.name).toBe('Alice');
    expect(person.age).toBe(30);
  });

  it('type guards with typeof narrow types', () => {
    function doubleOrLength(x: string | number): number {
      if (typeof x === 'string') return x.length;
      return x * 2;
    }
    expect(doubleOrLength('hello')).toBe(5);
    expect(doubleOrLength(7)).toBe(14);
  });

  it('type guards with in operator', () => {
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };
    function move(animal: Fish | Bird): string {
      if ('swim' in animal) return 'swimming';
      return 'flying';
    }
    expect(move({ swim: () => {} })).toBe('swimming');
    expect(move({ fly: () => {} })).toBe('flying');
  });

  it('discriminated unions enable exhaustive checking', () => {
    type Shape = { kind: 'circle'; radius: number } | { kind: 'rect'; width: number; height: number };
    function area(s: Shape): number {
      switch (s.kind) {
        case 'circle': return Math.PI * s.radius * s.radius;
        case 'rect': return s.width * s.height;
      }
    }
    expect(Math.floor(area({ kind: 'circle', radius: 1 }))).toBe(3);
    expect(area({ kind: 'rect', width: 3, height: 4 })).toBe(12);
  });

  it('instanceof type guard', () => {
    function formatDate(x: Date | string): string {
      if (x instanceof Date) return x.toISOString();
      return x.toUpperCase();
    }
    expect(formatDate('hello')).toBe('HELLO');
    expect(formatDate(new Date(0))).toBe('1970-01-01T00:00:00.000Z');
  });

  it('never type for exhaustive checks', () => {
    type TrafficLight = 'red' | 'yellow' | 'green';
    function action(light: TrafficLight): string {
      switch (light) {
        case 'red': return 'stop';
        case 'yellow': return 'caution';
        case 'green': return 'go';
      }
    }
    expect(action('red')).toBe('stop');
    expect(action('green')).toBe('go');
  });

  it('union type narrowing with Array.isArray', () => {
    function process(x: string | string[]): number {
      if (Array.isArray(x)) return x.length;
      return x.length;
    }
    expect(process('abc')).toBe(3);
    expect(process(['a', 'b'])).toBe(2);
  });
});