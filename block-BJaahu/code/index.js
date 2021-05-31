// Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
function Question(title, options, correctAnswerIndex) {
  let data = Object.create(Question.prototype);
  data.title = title;
  data.options = options;
  data.correctAnswerIndex = correctAnswerIndex;
  return data;
}

Question.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

let firstData = Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondData = Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  2
);

////////////////////////////////////////////////////////////////
//Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

function Question(title, options, correctAnswerIndex) {
  let data = Object.create(Question.prototype);
  data.title = title;
  data.options = options;
  data.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

let firstData = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondData = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  2
);

///////////////////////////////////////////////////// Create using class
class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}
let firstData = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondData = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  2
);
