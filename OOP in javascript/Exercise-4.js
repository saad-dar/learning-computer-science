// question 1
/**
 * 
function F() {
    function C() {
        return this;
    }

    return C();
}

var o = new F();

console.log(typeof o);

 */

// question 2

/**
 * 
function C() {
    this.a = 1;
    return false;
}

console.log(typeof new C())
 */

// question 3

/**
 * 
c= [1, 2, [1,2]]

c.sort()

c.join('--')

console.log(c);
 */

// question 4
/**
 * 
function MyString(input) {
    if(!(this instanceof MyString)) {
        return new MyString(input)
    }

    this.value = input + '';
    this.length = this.value.length;

    for (i = 0 ; i < this.length; i++) {
        this[i] = this.value[i]
    }
}

// toString()
MyString.prototype.toString = function() {
    return this.value;
}

// valueOf
MyString.prototype.valueOf = function() {
    return this.value;
}

MyString.prototype.concat = function(str) {
    return this.value + str
}
// charAt
MyString.prototype.charAt = function(index) {

    let idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx >= this.length) {
        return '';
    } 
    return this[idx]
}

// slice 
MyString.prototype.slice = function(start, end) {
    let startIdx = start < 0 ? this.length + start : start;
    let endIdx = end < 0 ? this.length + end : end;

    startIdx = Math.max(0, Math.min(this.length, startIdx));
    endIdx = Math.max(0, Math.min(this.length, endIdx));

    let result = ''

    for(let i =startIdx; i < endIdx; i++ ) {
        result += this[i];
    }

    return result;
}

MyString.prototype.split = function(seperator) {
    let result = []
    let temp = ''
    
    for (let i=0; i < this.length; i++) {
        if(this.value[i] === seperator) {
            result.push(temp)
            temp = ''
        } else {
            temp += this[i]
        }
    }
    result.push(temp);
    return result;
}

MyString.prototype.reverse = function () {
    result = ''

    for (let i = this.length -1 ; i >= 0; i--) {
        result += this[i];
    }

    return result
}
var s = new MyString('hello');

console.log(s.length); // 5
console.log(s[0]); // h
console.log(s.toString()); // hello
console.log(s.valueOf()); // hello
console.log(s.charAt(4)); // o
console.log(s.concat(' world')); // hello world
console.log(s.slice(1,3)); // el
console.log(s.slice(0, -1)); // hell
console.log(s.split('e')); // ['h', 'llo']
console.log(s.split('l')); // ['he', '', 'o']
console.log(s.reverse()); // olleh

 */

// question 5

/** 
 * 
function MyArray() {
    if(!(this instanceof MyArray)) {
        return new MyArray(...arguments)
    }

    this.length = 0;

    for(let i =0; i < arguments.length; i++ ) {
        this[this.length] = arguments[i];
        this.length++;
    }
}

MyArray.prototype.toString = function () {
    let result = '';
    for (let i =0; i < this.length; i++) {
        if (i > 0) result += ',';
        result += this[i]
    }
    return result
}
MyArray.prototype.push = function (element) {
    this[this.length] = element;
    this.length++;
    return this.length;
}

MyArray.prototype.pop = function () {
    let element = this[this.length - 1];
    this.length--;
    return element;
}

MyArray.prototype.join = function (seperator) {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        if (i > 0) result += seperator;
        result += this[i];
    }
    return result;
}
// Usage
var s = new MyArray(1,2,3, 'test');

console.log(s.length) // 4
console.log(s.toString()); // '1,2,3,test'
console.log(s.push('boo')) // 5
console.log(s.toString()) // '1,2,3,test,boo'
console.log(s.pop()) // boo
console.log(s.toString()) // '1,2,3,test'
console.log(s.join('-')); // '1-2-3-test'
console.log(s.join(' isn\'t ')); // 1 isn't 2 isn't 3 isn't test
 * 
*/

// question 6

/** */

const MyMath = {
    rand: function (min, max, inclusive = true) {
        if (inclusive) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        } else {
            return Math.floor((Math.random() + (max - min)) + min);
        }
    }, 

    min: function (array) {
        let smallest = array[0];
        for (let i =1; i < array.length; i++) {
            if(array[i] < smallest) {
                smallest = array[i]
            }
        }
        return smallest;
    },

    max: function (array) {
        let largest = array[0];
        for (let i =1; i < array.length; i++) {
            if(array[i] > largest) {
                largest = array[i]
            }
        }
        return largest;
    }
}

console.log(MyMath.rand(1, 10)); // random number between 1 and 10 inclusive
console.log(MyMath.rand(1,10, false)) // random number between 1 and 10 exclusive
console.log(MyMath.min([3, 1, 4, 1, 5, 9])); // 1
console.log(MyMath.max([3, 1, 4, 1, 5, 9])); // 9