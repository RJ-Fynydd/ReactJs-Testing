// ---------- Destructuring ----------
var foo = {
    bar: 1,
    baz: 2
};

// Just get "bar" out of the foo object.
var { baz } = foo;
console.log(baz);
// Dest name must match what varable you want out of the object.

// Destructure arrays
var tenses = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = tenses;
// firstPerson is array index 0 and secondPerson is index 1 of array. Order is index!

// Destructuring in function parameters. Pass a object to this function with props called var1 and var2.
var myObject = {
    var1: "I am variable one!",
    var2: "I am variable two!",
    otherVar: "NuLl"
}
function testingObjDest({ var1, var2 }) {
    console.log(var1);      // Returns "I am variable one!"
    console.log(var2);      // Returns "I am variable two!"
    //console.log(otherVar);  // Returns undefined
}
testingObjDest(myObject);   // ^^^

// Same with arrays
var myArray = [
    "I am index zero!",
    "I am index one!",
    "NuLl"
];
function testingArrayDest([ index1, index2 ]) {
    console.log(index1);      // Returns "I am index zero!"
    console.log(index2);      // Returns "I am index one!"
    //console.log(index3);      // Returns undefined
}
testingArrayDest(myArray);   // ^^^


// Destructuring into objects
var foo = 2;

var obj = {
    bar: 1,
    foo     // Same as "foo: foo" | variable name must be the same as object property.
}


// ---------- END OF Destructuring ----------
