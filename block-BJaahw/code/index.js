// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
  let data = {};
  data.name = name;
  data.age = age;
  data.userName = function () {
    return data.name;
  };
  data.age = function () {
    return data.age;
  };
  return data;
}
let data1 = createUser("Narasimha", 23);

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name, age) {
  let data = {};
  data.name = name;
  data.age = age;
  data.userName = function () {
    return data.name;
  };
  data.age = function () {
    return data.age;
  };
  data.sayHello = function sayHello() {
    return alert(`Welcome to ${data.userName}`);
  };
  return data;
}
let data1 = createUser("Narasimha", 23);

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
function createUser(name, age) {
  let data = {};
  data.name = name;
  data.age = age;
  data.userName = function () {
    return data.name;
  };
  data.age = function () {
    return data.age;
  };
  return data;
}
let personOne = createUser("Narasimha", 23);
let personTwo = createUser("Chinna", 23);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
function createUser() {
  let data = Object.create(createUsermethods);
  return data;
}
let createUsermethods = {
  sayHello: function () {
    alert("Hello World");
  },
};
let userOne = createUser();

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function createUser() {
  let data = Object.create(createUser.prototype);
  return data;
}
createUser.prototype = {
  sayHello: function () {
    alert("Hello World");
  },
};
let userOne = createUser();
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function createUser(name, age) {
  this.name = name;
  this.age = age;
}
createUser.prototype = {
  nameChange() {
    return this.name;
  },
  ageChange() {
    return this.age;
  },
};
let personOne = new createUser("chinna", 23);
let personTwo = new createUser("Narasimha", 23);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.


// 8. Convert the `createUser` function into `User` class.
class User(){
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    nameChange(){
        return this.name
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
