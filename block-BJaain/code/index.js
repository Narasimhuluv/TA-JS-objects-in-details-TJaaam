console.log(this.document === document); // true

// ------------

console.log(this === window); //true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // window

// ------------

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); // False

// ------------

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // True ??

// ------------

// This for IIFE
(function () {
  console.log("Anonymous function invocation");
  console.log(this === window);
})(); // true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); // Some Method

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Name : John Read
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Name : Paul Adams

// ------------

function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // false
let fun1 = user.foo1;
fun1(); // true ??
user.foo1(); // false ??

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // 81 ??

var retrieveX = obj.getX;
retrieveX(); // 9 ??

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81 ??

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // John Read
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Paul Adams

person.displayName.call(person2); // Paul Adams ??

// ------------

const a = {
  a: "a",
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Window
obj.getThis();

// "Window"
obj.getThis.call(a);

// "Window"
obj.getThis2();

// a: "a"
obj.getThis2.call(a);

// Window
obj.getThis3();

// getThis functions display
obj.getThis4();

// -------------

let person = {
  name: "Jay",
  greet: function () {
    console.log("hello, " + this.name);
  },
};

person.greet(); // "hello jay"

let greet = person.greet;
greet(); // hello

// -------------

let name = "Jay Global";
let person = {
  name: "Jay Person",
  details: {
    name: "Jay Details",
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // Jay Details?
console.log(person.print()); // Jay Person?

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // Undefined
console.log(name2.print()); // Jay Details

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = "inner";
    console.log(n);
  };
  return innerFn;
};

outerFn()();

// innerItem is not defined

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log("this inside of outerFn double()");
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Window ???
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log("this inside of outerFn doubleArrow()");
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // [2,,4,6] ???
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();

// --------------

let bobObj = {
  name: "Bob",
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // bob??

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2 and why it is we are calling the value Array of data in 0th index in printSecondData ???

// --------------

const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // Hey mom just Called ???

// -----------------

const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // Hey Undefined just Called ???

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom",
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // Undefined , called Too ??
