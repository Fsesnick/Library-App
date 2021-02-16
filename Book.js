class Book {
constructor(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.patron = null;
  this.dueDate = null;
  this.out = false;
  }
}