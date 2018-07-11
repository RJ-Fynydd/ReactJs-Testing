// ---------- Generator functions ----------




// ---------- END OF Generator functions ----------

// ---------- Arrow functions ----------

// Old way
var yote = function(a, b) {
    return a + b;
};

// New arrow way
var yed = (a, b) => {
    return a + b;
}


// Useful when passing functions as parameters
var aFunc = (a, b, callback) => {
    callback(a + b);
}

aFunc(3, 5, (a) => {console.log(a)});   // Prints "8"
// Or if it's a one-liner you can drop the braces
aFunc(3, 5, (a) => console.log(a));     // Prints "8"
// Or if it's a one-liner you can also drop "return" if it was there.
aFunc(3, 5, (a) => 6);     // Prints "6"
// Instead of
//aFunc(3, 5, (a) => return 6);     // Prints "6"
// Or if it's on one line and theres only one argument you can drop the parentheses.
aFunc(3, 5, a => a++);

// Example
[3,444,3,6,4,2,7,5,3,6,53,6,3,435,345,345,35,3,53534,534,3,53,5,34,53,5,3,53,5,3453,453,45,35,3,45,345,34,53,45,345,34,53,45,345]
.map(val => val*2).forEach(a => console.log(a));


// Lexical Binding

var module = {
    age: 30,
    foo: function() {
        setTimeout(() => {
            console.log(this.age);
        }, 100);
    }
};


// ---------- END OF Arrow functions ----------
