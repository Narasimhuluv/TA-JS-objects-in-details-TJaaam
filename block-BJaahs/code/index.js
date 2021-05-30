const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};

// Without Object

function isAnswerCorrect(index) {
  return (index = correctAnswerIndex);
}
function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// Organize using object

let secondData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,

  isAnswerCorrect(index) {
    return index === secondData.correctAnswerIndex;
  },

  getCorrectAnswer() {
    return secondData.options[correctAnswerIndex];
  },
};

// Use a function to create object

function createData(title, options, correctAnswerIndex) {
  let data = {};
  data.title = title;
  data.options = options;
  data.correctAnswerIndex = correctAnswerIndex;

  data.isAnswerCorrect = function (index) {
    return index === data.correctAnswerIndex;
  };

  data.getCorrectAnswer = function () {
    return data.options[data.correctAnswerIndex];
  };
  return data;
}

let firstData = createData(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondData = createData(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  2
);

// Convert the function to use `this` keyword

function createData(title, options, correctAnswerIndex) {
  let data = {};
  data.title = title;
  data.options = options;
  data.correctAnswerIndex = correctAnswerIndex;

  data.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };

  data.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return data;
}

let firstData = createData(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondData = createData(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  2
);
