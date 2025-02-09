/**
 * @license MIT
 * @copyright 2022 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 * double-ended queue
 */
class Deque {
  /**
   * Creates a deque
   * @param {array} [elements]
   */
  constructor(elements) {
    this._backElements = Array.isArray(elements) ? elements : [];
    this._frontElements = [];
    this._backOffset = 0;
    this._frontOffset = 0;
  }

  /**
   * Adds an element at the front of the queue
   * @public
   * @param {number|string|object} element
   */
  pushFront(element) {
    this._frontElements.push(element);
    return this;
  }

  /**
   * Adds an element at the back of the queue
   * @public
   * @param {number|string|object} element
   */
  pushBack(element) {
    this._backElements.push(element);
    return this;
  }

  /**
   * Dequeues the front element in the queue
   * @public
   * @returns {number|string|object}
   */
  popFront() {
    if (this.size() === 0) {
      return null;
    }

    if (this._frontElements.length > 0) {
      const front = this._frontElements.pop();
      if (this._frontOffset >= this._frontElements.length) {
        this._frontElements = this._frontElements.slice(this._frontOffset);
        this._frontOffset = 0;
      }
      return front;
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
   * Dequeues the back element of the queue
   * @public
   * @returns {number|string|object}
   */
  popBack() {
    if (this.size() === 0) {
      return null;
    }

    if (this._backElements.length > 0) {
      const back = this._backElements.pop();
      if (this._backOffset >= this._backElements.length) {
        this._backElements = this._backElements.slice(this._backOffset);
        this._backOffset = 0;
      }
      return back;
    }

    const back = this.back();
    this._frontOffset += 1;
    if (this._frontOffset * 2 < this._frontElements.length) {
      return back;
    }

    this._frontElements = this._frontElements.slice(this._frontOffset);
    this._frontOffset = 0;
    return back;
  }

  /**
   * Returns the front element of the queue
   * @public
   * @returns {number|string|object}
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
   * Returns the back element of the queue
   * @public
   * @returns {number|string|object}
   */
  back() {
    if (this.size() === 0) {
      return null;
    }

    if (this._backElements.length > 0) {
      return this._backElements[this._backElements.length - 1];
    }

    return this._frontElements[this._frontOffset];
  }

  /**
   * Returns the number of elements in the deque
   * @public
   * @returns {number}
   */
  size() {
    const frontSize = this._frontElements.length - this._frontOffset;
    const backSize = this._backElements.length - this._backOffset;
    return frontSize + backSize;
  }

  /**
   * Checks if the queue is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the remaining elements in the queue as an array
   * @public
   * @returns {array}
   */
  toArray() {
    const backElements = this._backElements.slice(this._backOffset);
    const frontElements = this._frontElements.slice(this._frontOffset);
    return frontElements.reverse().concat(backElements);
  }

  /**
   * Clears the queue
   * @public
   */
  clear() {
    this._backElements = [];
    this._frontElements = [];
    this._backOffset = 0;
    this._frontOffset = 0;
  }

  /**
   * Creates a shallow copy of the queue
   * @public
   * @return {Deque}
   */
  clone() {
    return new Deque(this.toArray());
  }

  /**
   * Creates a deque from an existing array
   * @public
   * @static
   * @param {array} elements
   * @return {Deque}
   */
  static fromArray(elements) {
    return new Deque(elements);
  }
}

exports.Deque = Deque;
