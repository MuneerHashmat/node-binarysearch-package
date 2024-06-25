# Binary Search NPM Package

## Description

This package provides a simple implementation of the binary search algorithm in JavaScript. Binary search is an efficient algorithm for finding an item from a sorted array of items. It works by repeatedly dividing in half the portion of the array that could contain the item until you've narrowed the possible locations to just one.

## Installation

```bash
npm install @muneerhashmat/binarysearch
```

## Usage

```Javascript
const binarySearch = require('@muneerhashmat/binarysearch');

const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const result = binarySearch(array, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log('Element not found');
}

```
