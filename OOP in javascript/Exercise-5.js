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
 