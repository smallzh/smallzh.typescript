import { describe, it, expect } from 'vitest';

describe('Template literals', () => {
  it('basic interpolation and multi-line strings', () => {
    const name = 'Alice';
    const s = `Hello, ${name}!`;
    expect(s).toBe('Hello, Alice!');
  });

  it('tagged template basic behavior', () => {
    function tag(strings: TemplateStringsArray, value: any) {
      return strings[0] + String(value) + strings[1];
    }
    const x = tag`A-${"B"}-C`;
    expect(typeof x).toBe('string');
  });

  it('String.raw captures raw strings', () => {
    const raw = String.raw`Line1\nLine2`;
    expect(raw).toBe('Line1\\nLine2');
  });

  it('nested template literals', () => {
    const inner = 5;
    const outer = `Value: ${`#${inner}`}`;
    expect(outer).toBe('Value: #5');
  });

  it('template literals in function calls', () => {
    function f(s: string) { return s.toUpperCase(); }
    const out = f(`lower-${'case'}`);
    expect(out).toBe('LOWER-CASE');
  });
});
