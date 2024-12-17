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