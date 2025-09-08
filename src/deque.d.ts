export class Deque<T> {
  constructor(elements?: T[]);
  pushFront(element: T): Deque<T>;
  pushBack(element: T): Deque<T>;
  popFront(): T | null;
  popBack(): T | null;
  front(): T | null;
  back(): T | null;
  toArray(): T[];
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  clone(): Deque<T>;
  static fromArray<T>(elements: T[]): Deque<T>;
}
