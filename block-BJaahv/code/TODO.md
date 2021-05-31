# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

  ```js
  function createData(name, id, noOfProjects) {
    let data = {};
    data.name = name;
    data.score = score;
    data.noOfProjects = noOfProjects;
    data.changeName = function (name) {
      data.name = name;
      return data.name;
    };
    data.changeId = function (id) {
      data.id = id;
      return data.id[data.noOfProjects];
    };
  }

  let data1 = createData("chinna", "[1,2,3,4,5,6,7,8,9]", 1);
  let data1 = createData("Narasimha", "[1,2,3,4,5,6,7,8,9]", 2);
  ```

- [ ] Using Object.create (prototypal pattern)

```js
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
```

- [ ] Using Pseudoclassical Way
- [ ] Using Class

```js
class user{
  constructor(name , id , noOfProjects)
}
```

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
