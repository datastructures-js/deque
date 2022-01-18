const { expect } = require('chai');
const { Deque } = require('../src/deque');

describe('Deque unit tests', () => {
  let deque;

  describe('constructor', () => {
    it('creates an empty deque', () => {
      deque = new Deque();
    });
  });

  describe('fromArray', () => {
    it('creates a deque from an existing array', () => {
      const dq = Deque.fromArray([1, 2, 3]);
      expect(dq.front()).to.equal(1);
      expect(dq.back()).to.equal(3);
      expect(dq.size()).to.equal(3);
    });
  });

  describe('pushFront', () => {
    it('add elements at the front', () => {
      deque.pushFront(3);
      deque.pushFront(2);
      deque.pushFront(1);
      expect(deque.size()).to.equal(3);
    });
  });

  describe('pushBack', () => {
    it('add elements at the back', () => {
      deque.pushBack(4);
      deque.pushBack(5);
      deque.pushBack(6);
      expect(deque.size()).to.equal(6);
    });
  });

  describe('popFront', () => {
    it('remove elements from front', () => {
      expect(deque.popFront()).to.equal(1);
    });
  });

  describe('popBack', () => {
    it('remove elements from back', () => {
      expect(deque.popBack()).to.equal(6);
    });
  });

  describe('size', () => {
    it('get number of elements in the deque', () => {
      expect(deque.size()).to.equal(4);
    });
  });

  describe('front', () => {
    it('get front element', () => {
      expect(deque.front()).to.equal(2);
    });
  });

  describe('back', () => {
    it('should peek the back element', () => {
      expect(deque.back()).to.equal(5);
    });
  });

  describe('isEmpty', () => {
    it('should not be empty', () => {
      expect(deque.isEmpty()).to.equal(false);
    });
  });

  describe('clone', () => {
    it('clone the deque', () => {
      const clone = deque.clone();
      clone.popFront();
      expect(clone.front()).to.equal(3);
      expect(clone.size()).to.equal(3);
      expect(deque.front()).to.equal(2);
      expect(deque.size()).to.equal(4);
    });
  });

  describe('toArray', () => {
    it('should convert the deque into an array', () => {
      expect(deque.toArray()).to.deep.equal([2, 3, 4, 5]);
    });
  });

  describe('popFront/popBack', () => {
    it('should dequeue all elements', () => {
      expect(deque.popFront()).to.be.equal(2);
      expect(deque.popBack()).to.be.equal(5);
      expect(deque.popFront()).to.be.equal(3);
      expect(deque.popBack()).to.be.equal(4);
      expect(deque.popFront()).to.be.equal(null);
    });
  });

  describe('.clear()', () => {
    it('should clear the deque', () => {
      deque.pushFront(3);
      deque.pushFront(2);
      deque.pushFront(1);
      deque.pushBack(4);
      deque.pushBack(5);
      deque.pushBack(6);
      expect(deque.size()).to.equal(6);
      expect(deque.toArray()).to.deep.equal([1, 2, 3, 4, 5, 6]);
      deque.clear();
      expect(deque.popFront()).to.be.equal(null);
      expect(deque.popBack()).to.be.equal(null);
      expect(deque.front()).to.be.equal(null);
      expect(deque.back()).to.be.equal(null);
      expect(deque.size()).to.be.equal(0);
      expect(deque.isEmpty()).to.be.equal(true);
    });
  });
});
