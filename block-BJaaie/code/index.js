//   Class Pattern
class animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }

  eat() {
    return `I live in ${this.location} and I can eat`;
  }
  changeLocation(newLocation) {
    this.location = location;
    return this.location;
  }
  summery() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

class dog extends animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    return alert(`I am ${this.name} and I can Bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summery() {
    return `I am ${this.name} and I am of ${this.color} color.I can also Bark`;
  }
}
let dog1 = new dog("Himachal Pradesh", 4, "pochi", "blackish");

// /////////////////////////////////////////////////

class cat extends dog {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs, name, color);
  }
  meow() {
    return alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  summery() {
    return `I am ${this.name} and the color of my eyes are ${this.color}. I can also do meow meow`;
  }
}

let cat1 = new cat("andhrapradesh", 4, "pilli", "yello Orange");

// -----------------------------------------------------------------------

// -----  Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
  eat: function () {
    return `I live in ${this.location} and I can eat`;
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },

  summery: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function CreateDog(location, numberOfLegs, name, color) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name;
  this.color;
}

CreateDog.prototype = {
  bark() {
    return `I live in ${this.location} and I can eat`;
  },
  summery() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
};

let dog = new CreateDog("Himachal pradesh", 4, "pochi", "blackish");

function CreateCat(location, numberOfLegs, name, color) {
  CreateDog.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}

CreateCat.prototype = {
  meow() {
    return `I live in ${this.location} and I can eat`;
  },
  summery() {
    return `I live in ${this.name} and I have ${this.color}`;
  },
  // changeColorOfEyes(newColor) {
  //   this.color = newColor;
  //   return this.color;
  // },
};
let cat = new CreateCat("Andhra Pradesh", 4, "pilli", "reddish");
