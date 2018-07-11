"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES6 classes
var Parent = function () {
    function Parent(inPut) {
        _classCallCheck(this, Parent);

        console.log("Parent is being constructed with " + inPut + " as a variable!"); // Using a string template
    }

    // ES7 static function


    _createClass(Parent, [{
        key: "bar",
        value: function bar() {
            console.log("Bar function!");
        }
    }], [{
        key: "foo",
        value: function foo() {
            console.log("Foo is static!");
        }
    }]);

    return Parent;
}();

var myParent = new Parent("Stuff");
myParent.bar(); // Called with an instance.
Parent.foo(); // Statically called!


// Lets extend!

var Child = function (_Parent) {
    _inherits(Child, _Parent);

    function Child(inPut) {
        _classCallCheck(this, Child);

        // Pass parameters to super constructor.
        var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, inPut));

        console.log("Child is being initialized as an extension of Parent! " + inPut);
        return _this;
    }

    _createClass(Child, [{
        key: "bax",
        value: function bax() {
            console.log("I am a small helpless child.");
        }
    }]);

    return Child;
}(Parent);

var myChild = new Child("Hello!");
myChild.bar(); // Called from super object.
Child.foo(); // Statically called from Parent super!
myChild.bax(); // Called from Child class.
