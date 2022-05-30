# @datastructures-js/deque

[![npm](https://img.shields.io/npm/v/@datastructures-js/deque.svg)](https://www.npmjs.com/package/@datastructures-js/deque)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/deque.svg)](https://www.npmjs.com/package/@datastructures-js/deque) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/deque)

A performant double-ended queue (deque) implementation in javascript.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [Deque.fromArray](#dequefromarray)
  * [pushFront](#pushfront)
  * [pushBack](#pushback)
  * [front](#front)
  * [back](#back)
  * [popFront](#popfront)
  * [popBack](#popback)
  * [isEmpty](#isEmpty)
  * [size](#size)
  * [clone](#clone)
  * [toArray](#toarray)
  * [clear](#clear)
* [Build](#build)
* [License](#license)

## Install

```sh
npm install --save @datastructures-js/deque
```

### require

```js
const { Deque } = require('@datastructures-js/deque');
```

### import

```js
import { Deque } from '@datastructures-js/deque';
```

## API

### constructor

##### JS
```js
// empty queue
const deque = new Deque();

// from an array
const deque = new Deque([1, 2, 3]);
```

##### TS
```js
// empty queue
const deque = new Deque<number>();

// from an array
const deque = new Deque<number>([1, 2, 3]);
```

### Deque.fromArray

##### JS
```js
// empty queue
const deque = Deque.fromArray([]);

// with elements
const list = [10, 3, 8, 40, 1];
const deque = Deque.fromArray(list);

// If the list should not be mutated, use a copy of it.
const deque = Deque.fromArray(list.slice());
```

##### TS
```js
// empty queue
const deque = Deque.fromArray<number>([]);

// with elements
const list = [10, 3, 8, 40, 1];
const deque = Deque.fromArray<number>(list);
```

### pushFront
adds an element at the front of the queue.

```js
deque.pushFront(30).pushFront(20).pushFront(10);
```

### pushBack
adds an element at the back of the queue.

```js
deque.pushBack(40).pushBack(50).pushBack(60);
```

### front
peeks on the front element of the queue.

```js
console.log(deque.front()); // 10
```

### back
peeks on the back element of the queue.

```js
console.log(deque.back()); // 60
```

### popFront
removes and returns the front element in the queue.

```js
console.log(deque.popFront()); // 10
console.log(deque.front()); // 20
```

### popBack
removes and returns the back element in the queue.

```js
console.log(deque.popBack()); // 60
console.log(deque.back()); // 50
```

### isEmpty
checks if the queue is empty.

```js
console.log(deque.isEmpty()); // false
```

### size
returns the number of elements in the queue.

```js
console.log(deque.size()); // 4
```

### clone
creates a shallow copy of the queue.

```js
const deque2 = Deque.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  deque2.clone();

clone.popFront();

console.log(deque2.front()); // { id: 2 }
console.log(clone.front()); // { id: 4 }
```

### toArray
returns a copy of the remaining elements as an array.

```js
console.log(deque.toArray()); // [ 20, 30, 40, 50 ]
```

### clear
clears all elements from the queue.

```js
deque.clear();
deque.size(); // 0
```

### Build

```sh
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/deque/blob/master/LICENSE)
