import { describe, it, expect } from 'vitest';

describe('Type Manipulation', () => {
  type Person = { name: string; age: number };
  type PartialPerson = Partial<Person>;
  type RequiredPerson = Required<PartialPerson>;
  const p: PartialPerson = { name: 'Zoe' };
  it('Partial and Required', () => {
    expect(p.name).toBe('Zoe');
  });

  it('Record, Pick, Omit', () => {
    type KV = { id: number; tag: string; meta?: string };
    type R = Record<'a'|'b', number>;
    const r: R = { a: 1, b: 2 };
    type Picked = Pick<KV, 'id'>;
    const pk: Picked = { id: 5 };
    type O = Omit<KV, 'tag'>;
    const o: O = { id: 7, meta: 'x' } as any;
    expect(r.a).toBe(1);
    expect(pk.id).toBe(5);
    expect(o.id).toBe(7);
  });

  it('template literal types and mapped types remapping', () => {
    type Foo = { a: number; b: string };
    type Remap = { [K in keyof Foo as `new_${K & string}`]: Foo[K] };
    const r: Remap = { new_a: 1, new_b: 'two' } as any;
    expect(r.new_a).toBe(1);
  });
});
