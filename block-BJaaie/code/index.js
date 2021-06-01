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
