import { describe, it, expect } from 'vitest';

describe('Classes', () => {
  it('basic class syntax and methods', () => {
    class A {
      x = 1;
      getX() { return this.x; }
      static s() { return 'static'; }
    }
    const a = new A();
    expect(a.getX()).toBe(1);
    expect(A.s()).toBe('static');
  });

  it('getters and setters', () => {
    class B {
      private _n = 0 as any;
      get n() { return this._n; }
      set n(v: any) { this._n = v; }
    }
    const b = new B();
    b.n = 5;
    expect(b.n).toBe(5);
  });

  it('inheritance with extends and super', () => {
    class Parent { protected v = 7; getV() { return this.v; } }
    class Child extends Parent { constructor() { super(); } }
    const c = new Child();
    expect(c.getV()).toBe(7);
  });

  it('computed method names and public fields', () => {
    class C {
      'bar-baz'() { return 'baz'; }
      bar = 1;
    }
    const c = new C();
    expect((c as any)['bar-baz']()).toBe('baz');
    expect(c.bar).toBe(1);
  });

  it('private fields', () => {
    class D {
      #secret = 123;
      reveal() { return this.#secret; }
    }
    const d = new D();
    expect(d.reveal()).toBe(123);
  });
});
