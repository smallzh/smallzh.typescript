import { describe, it, expect } from 'vitest';

describe('Classes', () => {
  abstract class Animal {
    constructor(public name: string) {}
    abstract speak(): string;
  }

  class Dog extends Animal {
    constructor(name: string, private sound: string) {
      super(name);
    }
    speak(): string {
      return this.sound;
    }
  }

  class Counter {
    private _count = 0;
    get count(): number { return this._count; }
    set count(v: number) { this._count = v; }
    static MAX = 100;
  }

  it('abstract class and implementation', () => {
    const d = new Dog('Rex', 'Bark');
    expect(d.name).toBe('Rex');
    expect(d.speak()).toBe('Bark');
  });

  it('getters/setters and static members', () => {
    const c = new Counter();
    c.count = 5;
    expect(c.count).toBe(5);
    expect(Counter.MAX).toBe(100);
  });
});
