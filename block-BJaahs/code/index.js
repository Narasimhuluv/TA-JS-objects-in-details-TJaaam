function createData(title, options, correctAnswerIndex = 1) {
  //   event.preventDefault();
  let data = {};
  data.title = title;
  data.options = options;
  data.correctAnswerIndex = correctAnswerIndex;

  data.testData = function (title) {
    this.title = this.title;
    return this.title;
  };
}
createData("me chinna");
