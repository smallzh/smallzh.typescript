import { describe, it, expect } from 'vitest';

describe('Map and Set', () => {
  it('Map basic CRUD operations', () => {
    const m = new Map<string, number>();
    m.set('a', 1);
    m.set('b', 2);
    expect(m.get('a')).toBe(1);
    expect(m.has('b')).toBe(true);
    expect(m.size).toBe(2);
    m.delete('a');
    expect(m.has('a')).toBe(false);
    expect(m.size).toBe(1);
    m.clear();
    expect(m.size).toBe(0);
  });

  it('Map preserves insertion order during iteration', () => {
    const m = new Map<string, number>();
    m.set('first', 1);
    m.set('second', 2);
    m.set('third', 3);
    const keys = [...m.keys()];
    expect(keys).toEqual(['first', 'second', 'third']);
  });

  it('Map can use non-string keys', () => {
    const objKey = { id: 1 };
    const m = new Map<object, string>();
    m.set(objKey, 'value');
    expect(m.get(objKey)).toBe('value');
    expect(m.size).toBe(1);
  });

  it('Map forEach iteration', () => {
    const m = new Map<string, number>([['a', 1], ['b', 2]]);
    const result: string[] = [];
    m.forEach((v, k) => result.push(`${k}=${v}`));
    expect(result).toEqual(['a=1', 'b=2']);
  });

  it('Set basic operations', () => {
    const s = new Set<number>();
    s.add(1);
    s.add(2);
    s.add(2); // duplicate
    expect(s.size).toBe(2);
    expect(s.has(1)).toBe(true);
    s.delete(1);
    expect(s.has(1)).toBe(false);
    s.clear();
    expect(s.size).toBe(0);
  });

  it('Set union, intersection, and difference', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);
    const union = new Set([...a, ...b]);
    expect([...union].sort()).toEqual([1, 2, 3, 4]);
    const intersection = new Set([...a].filter(x => b.has(x)));
    expect([...intersection].sort()).toEqual([2, 3]);
    const difference = new Set([...a].filter(x => !b.has(x)));
    expect([...difference]).toEqual([1]);
  });

  it('WeakMap basics', () => {
    const wm = new WeakMap<object, string>();
    const key = {};
    wm.set(key, 'val');
    expect(wm.get(key)).toBe('val');
    expect(wm.has(key)).toBe(true);
    wm.delete(key);
    expect(wm.has(key)).toBe(false);
  });

  it('WeakSet basics', () => {
    const ws = new WeakSet<object>();
    const obj = {};
    ws.add(obj);
    expect(ws.has(obj)).toBe(true);
    ws.delete(obj);
    expect(ws.has(obj)).toBe(false);
  });
});