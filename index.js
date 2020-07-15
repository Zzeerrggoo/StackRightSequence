'use strict';

class Stack {

    constructor(maxSize = 10000) {
        if (typeof maxSize !== 'number') {
            throw new TypeError();
        }
        if (isNaN(maxSize) || maxSize < 0 || !Number.isInteger(maxSize)) {
            throw new RangeError();
        }

        this._size = 0;
        this._maxSize = maxSize;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    push(value) {
        if (this._size >= this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        this[`_${this._size++}`] = value;

        return this._size;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }
        const lastItem = this[`_${--this._size}`];
        delete this[`_${this._size}`];
        return lastItem;

    }

    pick() {
        if (this.isEmpty) {
            return;
        }
        return this[`_${this._size - 1}`];
    }

}

const str = prompt();

alert(isRightSequence(str));

function isRightSequence(arr) {

    let counter = new Stack(arr.length);
    let temp = '';


    for (let item of arr) {

        if (item === '(' || item === '{' || item === '[') {
            counter.push(item);
        } else {

            temp = counter.pick();

            if (temp === '(' && item === ')' ||
                temp === '[' && item === ']' ||
                temp === '{' && item === '}') {

                counter.pop();
            } else {
                return false;
            }
        }
    }

    return counter.isEmpty;

}


































































