let form = document.querySelector("form");
let ul = document.querySelector("ul");

let formTitle = form.elements.title;
let formAuthor = form.elements.author;
let formImg = form.elements.img;

class Book {
  constructor(title, author, img) {
    this.title = title;
    this.author = author;
    this.img = img;
    this.isRead = false;
    this.id = `id - ${Date.now()}`;
  }

  toggleIsRead() {
    this.isRead = !this.isRead;
  }

  deleteTodo() {
    let index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
    this.createUI();
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }

  addBook(title, author, img) {
    let book = new Book(title, author, img);
    this.books.push(book);
    this.createUI();
  }

  createUI() {
    ul.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      li.classList.add("card");

      let cross = document.createElement("p");
      cross.innerText = "❌";
      cross.classList.add("cross");
      cross.addEventListener("click", () => {
        book.deleteTodo();
        this.createElement();
      });

      let img = document.createElement("img");
      img.src = book.img;
      img.classList.add("image");

      let title = document.createElement("h2");
      title.classList.add("title");
      title.innerText = book.title;

      let author = document.createElement("p");
      author.classList.add("author");
      author.innerText = book.author;

      let button = document.createElement("button");
      button.innerText = book.isRead ? "Completed!" : "Mark As Read!";

      button.classList.add("card_btn");
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });
      if (button.innerText === "Completed!") {
        button.style.background = "black";
      }

      li.append(cross, img, title, author, button);
      ul.append(li);
    });
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  let title = formTitle.value;
  let author = formAuthor.value;
  let img = formImg.value;

  library.addBook(title, author, img);

  title.value = "";
  author.value = "";
  img.value = "";
}

form.addEventListener("submit", handleSubmit);
