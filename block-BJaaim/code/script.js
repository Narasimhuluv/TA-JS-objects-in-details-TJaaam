let checkBtn = document.querySelector(".btn");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let correctCount = 0;

class Quiz {
  constructor(root, list = [], activeIndex = 0, score = 0) {
    this.questions = list;
    this.activeIndex = activeIndex;
    this.score = score;
    this.root = root;
  }
  nextQuestion() {
    return (this.activeIndex += 1);
  }
  prevQuestion() {
    return (this.activeIndex -= 1);
  }
  createUI(userSelection) {
    this.root.innerHTML = "";
    let currentQuestion = this.questions[this.activeIndex];
    let ui = currentQuestion.createUI();
    console.log(currentQuestion.isCorrect());
    if (currentQuestion.isCorrect(userSelection)) {
      this.updateScore();
      console.log("entered");
      let extra = document.createElement("p");
      extra.innerText = "correct Answer";
      extra.style.color = "green";

      correctCount++;
      let totalCorrect = document.querySelector(".totalCorrect");
      totalCorrect.innerText = correctCount;

      let score = document.createElement("p");
      score.innerText = `Score : ${this.score}`;

      this.root.append(ui, extra, score);
    } else {
      this.root.append(ui);
      //   extra.innerHTML = "Wrong Answer";
      //   extra.style.color = "red";
    }

    if (!currentQuestion.isCorrect(userSelection)) {
      this.updateScore();
      let extra1 = document.createElement("p");
      extra1.innerText = "wrong Answer";
    }
  }
  createEndUI() {
    this.root.innerHTML = "";
    let extra = document.createElement("p");
    extra.innerText = "Quiz Ended";
    this.root.append(extra);
  }
  updateScore() {
    return (this.score += 1);
  }
}
class Question {
  constructor(qTitle, options = [], correctAns) {
    this.qTitle = qTitle;
    this.options = options;
    this.correctAns = options[correctAns];
    this.id = `id-${Date.now()}`;
  }
  isCorrect(answer) {
    console.log(answer);
    return answer == this.correctAns;
  }
  getCorrectAnswer() {
    return this.correctAns;
  }
  createUI() {
    let li = document.createElement("li");
    let qTitle = document.createElement("h2");
    qTitle.innerText = this.qTitle;
    let subRoot = document.createElement("div");
    let optionOne = document.createElement("p");
    optionOne.setAttribute(`data-options`, this.options[0]);
    optionOne.innerText = `1. ${this.options[0]}`;

    let optionTwo = document.createElement("p");
    optionTwo.setAttribute(`data-options`, this.options[1]);
    optionTwo.innerText = `2. ${this.options[1]}`;

    let optionThree = document.createElement("p");
    optionThree.setAttribute(`data-options`, this.options[2]);
    optionThree.innerText = `3. ${this.options[2]}`;

    let optionFour = document.createElement("p");
    optionFour.setAttribute(`data-options`, this.options[3]);
    optionFour.innerText = `4. ${this.options[3]}`;

    subRoot.addEventListener("click", (event) => {
      myQuiz.createUI(event.target.dataset.options);
    });

    subRoot.append(optionOne, optionTwo, optionThree, optionFour);
    li.append(qTitle, subRoot);
    return li;
  }
}

let question1 = new Question(
  "HTML STANDS FOR ?",
  [
    " HighText Machine Language",
    " HyperText and links Markup Language",
    " HyperText Markup Language",
    " None of these",
  ],
  2
);
let question2 = new Question(
  "What is the Answer '3' + 5 * 10 ",
  [`${"530"}`, `${53}`, `${"503"}`, `${80}`],
  1
);
let question3 = new Question(
  " How to create an unordered list (a list with the list items in bullets) in HTML?",
  ["<ol>", "<ul>", "<li>", "<i>"],
  1
);
let question4 = new Question(
  "string  X= `Good`;  string  Y= `Eveninng`;  alert(X+Y)",
  ["GoodEvening", "Good", "Evening", "Undefined"],
  0
);
let question5 = new Question(
  " Which of the following tag is used to add rows in the table? ",
  ["<tr> and </tr>", "<td> and </td>", "<th> and </th>", "None of the above"],
  0
);

let myQuiz = new Quiz(document.querySelector(".quiz"), [
  question1,
  question2,
  question3,
  question4,
  question5,
]);

myQuiz.createUI();

let totalQ = document.querySelector(".totalQ");
totalQ.innerText = `${myQuiz.questions.length}`;

nextBtn.addEventListener("click", () => {
  myQuiz.nextQuestion();
  if (myQuiz.activeIndex < myQuiz.questions.length) {
    myQuiz.createUI();
    console.log(`1st time`, myQuiz.activeIndex, myQuiz.questions.length - 1);
  }
});

prevBtn.addEventListener("click", () => {
  myQuiz.prevQuestion();
  if (myQuiz.activeIndex >= 0) {
    myQuiz.createUI();
  }
});

class MyArray {
  constructor(list) {}
}

function overAll() {
  let count = 0;
  return {
    getCount: function () {
      return count;
    },
    incrementCount: function () {
      count = count + 1;
      return count;
    },
    decrementCount: function () {
      count = count - 1;
      return count;
    },
  };
}
function overAll() {
  let count = 0;
  function changeBy(val) {
    count += val;
  }
  return {
    getCount: function () {
      return count;
    },
    incrementCount: function () {
      return changeBy(1);
    },
    decrementCount: function () {
      return changeBy(-1);
    },
  };
}

function getCount() {
  return count;
}
function incrementCount() {
  count = count + 1;
  return count;
}
function decrementCount() {
  count = count + 1;
  return count;
}
