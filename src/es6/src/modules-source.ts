// Module source file for testing module behavior
export const moduleA = 'hello';
export const moduleB = 42;

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export default function defaultExport(): string {
  return 'default';
}