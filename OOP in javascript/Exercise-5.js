// question 1
var shape = {
    property : 'triangle',
    getType : function () {
        return 'triangle'
    }
}

// question 2
function Triangle (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;

// question 3
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
// question 4
var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

// question 5
for (prop in t) {
    if(t.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

// question 6 

if (typeof Array.prototype.shuffle !== 'function') {
    Array.prototype.shuffle = function () {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        return this
    }
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())