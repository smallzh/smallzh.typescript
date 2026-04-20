import { describe, it, expect } from 'vitest';

describe('Proxy and Reflect', () => {
  it('basic proxy get/set handler', () => {
    const target = { a: 1 };
    const handler: ProxyHandler<typeof target> = {
      get(t, p) { return p in t ? (t as any)[p] : undefined; },
      set(t, p, v) { (t as any)[p] = v; return true; }
    };
    const proxy = new Proxy(target, handler);
    proxy.a = 2;
    expect(proxy.a).toBe(2);
  });

  it('proxy has trap intercepts in operator', () => {
    const handler: ProxyHandler<object> = {
      has(t, p) { return p === 'secret'; }
    };
    const proxy = new Proxy({}, handler);
    expect('secret' in proxy).toBe(true);
    expect('other' in proxy).toBe(false);
  });

  it('proxy deleteProperty trap', () => {
    const obj = { x: 1, y: 2 };
    const handler: ProxyHandler<typeof obj> = {
      deleteProperty(t, p) {
        delete (t as any)[p];
        return true;
      }
    };
    const proxy = new Proxy(obj, handler);
    delete proxy.x;
    expect('x' in proxy).toBe(false);
    expect(proxy.y).toBe(2);
  });

  it('proxy apply trap intercepts function calls', () => {
    const fn = (a: number, b: number) => a + b;
    const handler: ProxyHandler<typeof fn> = {
      apply(target, _thisArg, args) {
        return target(...args) * 2;
      }
    };
    const proxy = new Proxy(fn, handler);
    expect(proxy(3, 4)).toBe(14); // (3+4)*2
  });

  it('Reflect.get and Reflect.set', () => {
    const obj = { a: 1 };
    expect(Reflect.get(obj, 'a')).toBe(1);
    Reflect.set(obj, 'b', 2);
    expect(obj.b).toBe(2);
  });

  it('Reflect.has and Reflect.deleteProperty', () => {
    const obj = { x: 1 };
    expect(Reflect.has(obj, 'x')).toBe(true);
    Reflect.deleteProperty(obj, 'x');
    expect(Reflect.has(obj, 'x')).toBe(false);
  });

  it('Reflect.apply calls a function with arguments', () => {
    const fn = (a: number, b: number) => a + b;
    expect(Reflect.apply(fn, null, [3, 5])).toBe(8);
  });

  it('Reflect.ownKeys returns all keys (strings and symbols)', () => {
    const sym = Symbol('s');
    const obj: any = { a: 1, [sym]: 2 };
    const keys = Reflect.ownKeys(obj);
    expect(keys).toContain('a');
    expect(keys).toContain(sym);
  });

  it('revocable proxy can be revoked', () => {
    const { proxy, revoke } = Proxy.revocable({ x: 1 }, {});
    expect(proxy.x).toBe(1);
    revoke();
    expect(() => proxy.x).toThrow();
  });
});