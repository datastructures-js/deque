export class Deque<T> {
  constructor(elements?: T[]);
  pushFront(element: T): Deque<T>;
  pushBack(element: T): Deque<T>;
  popFront(): T;
  popBack(): T;
  front(): T;
  back(): T;
  toArray(): T[];
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  clone(): Deque<T>;
  static fromArray<T>(elements: T[]): Deque<T>;
}
