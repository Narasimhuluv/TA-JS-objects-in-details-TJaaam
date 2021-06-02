## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `I will eat Healthy food at proper maintaing time`;
  }
  sleep() {
    return `i will sleep early in the night at 10'o clock`;
  }
  walk() {
    return `i will walk daily 5 kilometers`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `I use to play Cricket Game Daily in the evening;`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `I teach HTML & CSS for FrontEnd`;
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `I will draw images`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    return `teamName is buldozers`;
  }
}

let person1 = new Person("Narasimhulu Vasam", 23, "Male");
let player1 = new Player("Narasimhulu Vasam", 23, "Male", "Cricket");
let teacher1 = new Teacher("Narasimhulu Vasam", 23, "Male", "HTML & CSS");
let artist1 = new Artist("Narasimhulu Vasam", 23.5, "Male", "Drawing");
let cricket1 = new Cricketer(
  "Narasimhulu Vasam",
  23,
  "Male",
  "Cricket",
  "India"
);
```
