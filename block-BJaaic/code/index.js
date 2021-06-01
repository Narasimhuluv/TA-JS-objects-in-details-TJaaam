function animal(location, numberOfLegs) {
  let obj = {};
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  obj.eat = function () {
    return console.log(`I Live in ${location} and I can eat`);
  };
  obj.changeLocation = function (newLocation) {
    location = newLocation;
    return location;
  };
  obj.summery = function () {
    return `I live in ${location} and i Have ${numberOfLegs}`;
  };
  return obj;
}

let animal1 = animal("Kadapa", 4);

// ///////////////////////////

// function animal(location, numberOfLegs) {
//   this.location = location;
//   this.numberOfLegs = numberOfLegs;
// }

// let animalMethods = {
//   eat: function () {
//     return console.log(`I live in ${this.location} and I can eat`);
//   },

//   changeLocation: function (newLocation) {
//     this.location = newLocation;
//     return this.location;
//   },

//   summery: function () {
//     return `I live in ${this.location} and i Have ${numberOfLegs}`;
//   },
// };

// let animal1 = animal("hyderbad", 2)

function animal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

animal.prototype = {
  eat: function () {
    return console.log(`I live in ${this.location} and I can eat`);
  },

  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },

  summery: function () {
    return `I live in ${this.location} and i Have ${this.numberOfLegs}`;
  },
};

let animal1 = new animal("hyderbad", 2);

class animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    return console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }

  summery() {
    return `I have in ${this.location} and I have ${this.numberOfLegs}`;
  }
}
let animal1 = new animal("Dharamshala", 4);
