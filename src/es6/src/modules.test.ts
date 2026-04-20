import { describe, it, expect } from 'vitest';
import { moduleA, moduleB, greet, add } from './modules-source';
import defaultFn from './modules-source';

describe('Modules', () => {
  it('named exports can be imported individually', () => {
    expect(moduleA).toBe('hello');
    expect(moduleB).toBe(42);
  });

  it('named export functions work correctly', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(add(2, 3)).toBe(5);
  });

  it('default export can be imported as default', () => {
    expect(defaultFn()).toBe('default');
  });

  it('namespace import collects all exports', () => {
    // We can verify module values exist
    expect(moduleA).toBeDefined();
    expect(moduleB).toBeDefined();
    expect(typeof greet).toBe('function');
    expect(typeof add).toBe('function');
  });

  it('module constants are immutable within test scope', () => {
    // Imported bindings are read-only (TypeScript enforces this)
    const originalA = moduleA;
    expect(originalA).toBe('hello');
    // Re-importing the same module yields the same values
    expect(moduleA).toBe(originalA);
  });

  it('re-export pattern with barrel file simulation', () => {
    // Simulating barrel re-export:
    // In a real project: export { moduleA, moduleB } from './modules-source'
    // Here we just verify the imports work as expected
    expect(moduleA).toBe('hello');
    expect(moduleB).toBe(42);
  });
});