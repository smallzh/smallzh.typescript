import { describe, it, expect } from 'vitest';

describe('let and const semantics', () => {
  it('let respects block scope', () => {
    let a = 1;
    {
      let a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });

  it('const binds immutable binding but object mutation is allowed', () => {
    const obj = { v: 1 };
    obj.v = 2; // mutation allowed
    expect(obj.v).toBe(2);
  });

  it('const reassignment throws (binding immutability)', () => {
    const c = { x: 1 };
    expect(() => {
      // @ts-ignore - intentionally testing runtime behavior
      c = { x: 2 };
    }).toThrow();
  });

  it('var has function scope, let has block scope in loops', () => {
    // var inside for loop: IIFE captures value at invocation time
    const results: number[] = [];
    for (var i = 0; i < 3; i++) {
      results.push(i);
    }
    // var i is now 3 after the loop, but we pushed values before increment
    expect(results).toEqual([0, 1, 2]);
    // var i is still accessible after the loop (function scoped)
    expect(i).toBe(3);

    // let inside for loop: each iteration has its own binding
    const ll: number[] = [];
    for (let j = 0; j < 3; j++) {
      ll.push(j);
    }
    expect(ll).toEqual([0, 1, 2]);
  });

  it('var closure classic issue: closures capture var by reference', () => {
    const fns: (() => number)[] = [];
    for (var k = 0; k < 3; k++) {
      fns.push(() => k); // all closures share the same k
    }
    // All functions return 3 because var k = 3 after loop
    expect(fns.map(fn => fn())).toEqual([3, 3, 3]);

    // With let, each iteration has its own k
    const fns2: (() => number)[] = [];
    for (let m = 0; m < 3; m++) {
      fns2.push(() => m); // each closure captures its own m
    }
    expect(fns2.map(fn => fn())).toEqual([0, 1, 2]);
  });

  it('temporal dead zone when accessing let before initialization', () => {
    // TDZ: accessing before initialization should throw a ReferenceError
    const fn = () => {
      // @ts-ignore
      return a;
      let a = 5;
    };
    expect(fn).toThrow();
  });
});