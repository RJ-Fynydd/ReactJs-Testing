"use strict";

var foo = 1; // Can't be changed.
var obj = { a: 1, b: 3 }; // Object can be mutatated (obj.a = 4;) but it is a better idea to use let for variables that change.


var a = 0; // Let and const are block scopped.
a = 4;
