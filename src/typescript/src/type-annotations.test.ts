import { describe, it, expect } from 'vitest';

describe('Type Annotations', () => {
  function add(a: number, b: number): number {
    return a + b;
  }

  it('variable annotations', () => {
    const x: number = 10;
    expect(x).toBe(10);
  });

  it('function parameter and return types', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('object property annotations', () => {
    interface User { id: number; name: string; active?: boolean }
    const u: User = { id: 1, name: 'Alice' };
    expect(u.name).toBe('Alice');
  });

  it('type assertion (as)', () => {
    const s: any = 'hello';
    const t = s as string;
    expect(t.length).toBe(5);
  });

  it('non-null assertion and definite assignment', () => {
    let maybeString: string | null = null;
    // simulate definite assignment
    maybeString = 'ok';
    expect(maybeString!).toBe('ok');
  });

  it('definite assignment assertion in class property', () => {
    class Sample { public s!: string }
    const inst = new Sample();
    inst.s = 'ready';
    expect(inst.s).toBe('ready');
  });
});
