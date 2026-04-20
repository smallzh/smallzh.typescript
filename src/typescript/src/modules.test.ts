import { describe, it, expect } from 'vitest';
import { a, greet } from './modules';

describe('Modules and Exports', () => {
  it('barrel exports contain expected keys', () => {
    expect(a).toBe(1);
    expect(typeof greet).toBe('function');
  });
});
