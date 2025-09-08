export class Deque<T> {
  constructor(elements?: T[]);
  pushFront(element: T): Deque<T> | null;
  pushBack(element: T): Deque<T> | null;
  popFront(): T | null;
  popBack(): T | null;
  front(): T;
  back(): T | null;
  toArray(): T[];
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  clone(): Deque<T>;
  static fromArray<T>(elements: T[]): Deque<T>;
}
