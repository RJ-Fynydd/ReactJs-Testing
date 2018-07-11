"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// ---------- Destructuring ----------
var foo = {
    bar: 1,
    baz: 2
};

// Just get "bar" out of the foo object.
var baz = foo.baz;

console.log(baz);
// Dest name must match what varable you want out of the object.

// Destructure arrays
var tenses = ["me", "you", "he"];
var firstPerson = tenses[0],
    secondPerson = tenses[1];
// firstPerson is array index 0 and secondPerson is index 1 of array. Order is index!

// Destructuring in function parameters. Pass a object to this function with props called var1 and var2.

var myObject = {
    var1: "I am variable one!",
    var2: "I am variable two!",
    otherVar: "NuLl"
    // If var1 is undefined then it stays it's default of 25.  Also var2 will be passed in as var2 but will be newVar2Name in the function.
};function testingObjDest(_ref) {
    var _ref$var = _ref.var1,
        var1 = _ref$var === undefined ? 25 : _ref$var,
        newVar2Name = _ref.var2;

    console.log(var1); // Returns "I am variable one!"
    console.log(newVar2Name); // Returns "I am variable two!"
    //console.log(otherVar);  // Returns undefined
}
testingObjDest(myObject); // ^^^
// Or pass in object in any Order
testingObjDest({ var2: var2, var1: var1 });

// Same with arrays
var myArray = ["I am index zero!", "I am index one!", "NuLl"];
function testingArrayDest(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        index1 = _ref3[0],
        index2 = _ref3[1];

    console.log(index1); // Returns "I am index zero!"
    console.log(index2); // Returns "I am index one!"
    //console.log(index3);      // Returns undefined
}
testingArrayDest(myArray); // ^^^


// Destructuring into objects
var foo = 2;

var obj = {
    bar: 1,
    foo: foo // Same as "foo: foo" | variable name must be the same as object property.

    // ---------- END OF Destructuring ----------

};
