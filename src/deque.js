/**
 * @license MIT
 * @copyright 2021 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */
class Deque {
  /**
   * Creates a deque.
   * @param {array} [elements]
   */
  constructor(elements) {
    this._backElements = Array.isArray(elements) ? elements : [];
    this._frontElements = [];
    this._backOffset = 0;
  }

  /**
   * Adds an element at the front of the queue.
   * @public
   * @param {any} element
   */
  pushFront(element) {
    this._frontElements.push(element);
    return this;
  }

  /**
   * Adds an element at the back of the queue.
   * @public
   * @param {any} element
   */
  pushBack(element) {
    this._backElements.push(element);
    return this;
  }

  /**
   * Dequeues the front element in the queue.
   * @public
   * @returns {any}
   */
  popFront() {
    if (this.size() === 0) {
      return null;
    }

    if (this._frontElements.length > 0) {
      return this._frontElements.pop();
    }

    const front = this.front();
    this._backOffset += 1;

    if (this._backOffset * 2 < this._backElements.length) {
      return front;
    }

    this._backElements = this._backElements.slice(this._backOffset);
    this._backOffset = 0;
    return front;
  }

  /**
   * Dequeues the front element in the queue.
   * @public
   * @returns {any}
   */
  popBack() {
    const back = this._backElements.pop() || null;
    if (this._backOffset >= this._backElements.length) {
      this._backOffset = 0;
    }
    return back;
  }

  /**
   * Returns the front element of the queue.
   * @public
   * @returns {any}
   */
  front() {
    if (this.size() === 0) {
      return null;
    }

    if (this._frontElements.length > 0) {
      return this._frontElements[this._frontElements.length - 1];
    }

    return this._backElements[this._backOffset];
  }

  /**
   * Returns the back element of the queue.
   * @public
   * @returns {any}
   */
  back() {
    return this.size() > 0
      ? this._backElements[this._backElements.length - 1]
      : null;
  }

  /**
   * Returns the number of elements in the deque.
   * @public
   * @returns {number}
   */
  size() {
    const size = this._frontElements.length;
    if (this._backOffset >= this._backElements.length) {
      return size;
    }

    return size + (this._backElements.length - this._backOffset);
  }

  /**
   * Checks if the queue is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the remaining elements in the queue as an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const backElements = this._backElements.slice(this._backOffset);
    return this._frontElements.slice().reverse().concat(backElements);
  }

  /**
   * Clears the queue.
   * @public
   */
  clear() {
    this._backElements = [];
    this._frontElements = [];
    this._backOffset = 0;
  }

  /**
   * Creates a shallow copy of the queue.
   * @public
   * @return {Queue}
   */
  clone() {
    return new Deque(this.toArray());
  }

  /**
   * Creates a queue from an existing array.
   * @public
   * @static
   * @param {array} elements
   * @return {Queue}
   */
  static fromArray(elements) {
    return new Deque(elements);
  }
}

exports.Deque = Deque;
