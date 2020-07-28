const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');

let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return `${title} by ${author}, ${pages} Pages, ${read? 'read': 'not read yet'}`
  }
}

function addBookToLibrary() {
  const title = bookTitle.value;
  const author = bookAuthor.value
  const pages = bookPages.value
  const read = bookRead.checked
  console.log(read)
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  console.log(myLibrary)
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  bookRead.checked = false
}
