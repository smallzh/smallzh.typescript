import { describe, it, expect } from 'vitest';

class CustomError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

describe('Error Handling', () => {
  it('try/catch with known error types', () => {
    try {
      throw new CustomError(404, 'Not found');
    } catch (e) {
      const err = e as CustomError;
      expect(err).toBeInstanceOf(CustomError);
      if (err) expect(err.code).toBe(404);
    }
  });

  it('unknown error narrowing', () => {
    try { throw 'oops'; } catch (e) {
      const ok = typeof e === 'string';
      expect(ok).toBe(true);
    }
  });
});
