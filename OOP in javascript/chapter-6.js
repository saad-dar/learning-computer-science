function Shape(name) {
    this.name = name;
    this.toString = function () {
        return this.name;
    };
}

function TwoDShape() {
    this.name = '2D shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height / 2;
    };
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

var my = new Triangle(5, 10);

console.log(my.getArea());
console.log(my.toString());

console.log(my.constructor === Triangle) // true// this is bcz, the code on line 21 and 22

// 
console.log('instance of')
console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);
console.log(my instanceof Array);

console.log('is prototype of')
console.log(Shape.prototype.isPrototypeOf(my));
console.log(TwoDShape.prototype.isPrototypeOf(my));
console.log(Triangle.prototype.isPrototypeOf(my));
console.log(String.prototype.isPrototypeOf(my));

var td = new TwoDShape();

console.log(td.toString())

var s = new Shape();

console.log(s.constructor === Shape)