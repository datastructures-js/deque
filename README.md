# @datastructures-js/deque

[![build:?](https://travis-ci.org/datastructures-js/deque.svg?branch=master)](https://travis-ci.org/datastructures-js/deque) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/deque.svg)](https://www.npmjs.com/package/@datastructures-js/deque)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/deque.svg)](https://www.npmjs.com/packages/@datastructures-js/deque) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/deque)

A performant deque implementation in javascript.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [Deque.fromArray(elements)](#dequefromarrayelements)
  * [.pushFront(element)](#pushfront)
  * [.pushBack(element)](#pushback)
  * [.front()](#front)
  * [.back()](#back)
  * [.popFront()](#popfront)
  * [.popBack()](#popback)
  * [.isEmpty()](#isEmpty)
  * [.size()](#size)
  * [.clone()](#clone)
  * [.toArray()](#toarray)
  * [.clear()](#clear)
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
const queue = new Deque<number>();

// from an array
const queue = new Deque<number>([1, 2, 3]);
```

### Deque.fromArray(elements)

##### JS
```js
// empty queue
const queue = Deque.fromArray([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Deque.fromArray(list);

// If the list should not be mutated, use a copy of it.
const queue = Deque.fromArray(list.slice());
```

##### TS
```js
// empty queue
const queue = Deque.fromArray<number>([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Deque.fromArray<number>(list);
```

### .front()
peeks on the front element of the queue.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(queue.front()); // 10
```

### .back()
peeks on the back element in the queue.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(queue.back()); // 20
```


### .isEmpty()
checks if the queue is empty.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">boolean</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(deque.isEmpty()); // false
```

### .size()
returns the number of elements in the queue.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">number</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(deque.size()); // 1
```

### .clone() 
creates a shallow copy of the queue.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">Queue&lt;T&gt;</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
const queue = Deque.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  Deque.clone();

clone.dequeue();

console.log(queue.front()); // { id: 2 }
console.log(clone.front()); // { id: 4 }
```

### .toArray() 
returns a copy of the remaining elements as an array.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">T[]</td>
    <td align="center">O(n)</td>
  </tr>
</table>

```js
queue.enqueue(4).enqueue(2);
console.log(queue.toArray()); // [20, 4, 2]
```

### .clear()
clears all elements from the queue.

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

```js
queue.clear();
queue.size(); // 0
```

### Build

```sh
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/deque/blob/master/LICENSE)
