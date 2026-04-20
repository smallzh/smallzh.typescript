import { describe, it, expect, vi } from 'vitest';

describe('Decorators', () => {
  // Minimal decorators tests to ensure decorator wiring works without experimental decorators on/off
  function simpleClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      decorated = true;
    };
  }

  function simpleMethodDecorator(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      return (original as any).apply(this, args) + ' [decorated]';
    };
    return descriptor;
  }

  it('class decorator attaches marker', () => {
    @simpleClassDecorator
    class Demo { decorated?: boolean; }
    const d: any = new Demo();
    expect('decorated' in d).toBe(true);
  });

  it('method decorator wraps function', () => {
    class Greeter {
      @simpleMethodDecorator
      greet(name: string) { return `hi ${name}`; }
    }
    const g = new Greeter();
    expect(g.greet('A').endsWith('[decorated]')).toBe(true);
  });
});
