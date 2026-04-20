import { describe, it, expect } from 'vitest';

describe('Promises and async/await', () => {
  function delay(ms: number) {
    return new Promise<number>((resolve) => setTimeout(() => resolve(ms), ms));
  }

  it('basic promise resolve and then', async () => {
    const p = Promise.resolve(42);
    const v = await p;
    expect(v).toBe(42);
  });

  it('promise all', async () => {
    const p = Promise.all([Promise.resolve(1), Promise.resolve(2)]);
    const arr = await p;
    expect(arr).toEqual([1, 2]);
  });

  it('async/await error handling', async () => {
    async function fails() { throw new Error('boom'); }
    try {
      await fails();
      // should not reach
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('microtask queue behavior with then', async () => {
    let x = 0;
    Promise.resolve().then(() => x = 1);
    await Promise.resolve();
    expect(x).toBe(1);
  });

  it('Promise.race returns the fastest', async () => {
    const fast = Promise.resolve('fast');
    const slow = new Promise<string>((r) => setTimeout(() => r('slow'), 10));
    const v = await Promise.race([fast, slow]);
    expect(v).toBe('fast');
  });
});
