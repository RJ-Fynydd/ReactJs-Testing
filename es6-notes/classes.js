
// ES6 classes
class Parent {

    constructor(inPut) {
        console.log(`Parent is being constructed with ${inPut} as a variable!`);    // Using a string template
    }

    // ES7 static function
    static foo() {
        console.log("Foo is static!");
    }

    bar() {
        console.log("Bar function!");
    }

}


var myParent = new Parent("Stuff");
myParent.bar(); // Called with an instance.
Parent.foo();   // Statically called!


// Lets extend!

class Child extends Parent {
    constructor(inPut) {
        super(inPut);   // Pass parameters to super constructor.
        console.log(`Child is being initialized as an extension of Parent! ${inPut}`);
    }

    bax() {
        console.log("I am a small helpless child.");
    }
}

var myChild = new Child("Hello!");
myChild.bar();  // Called from super object.
Child.foo();    // Statically called from Parent super!
myChild.bax();          // Called from Child class.
