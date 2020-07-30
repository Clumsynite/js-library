const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')
const shelf = document.getElementById('bookshelf')
const addBtn = document.getElementById('add-btn')
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
const book1 = new Book('book1', 'me', 69, true)
myLibrary.push(book1)

const book2 = new Book('book2', 'you', 420, false)
myLibrary.push(book2)

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
  render()
}

function render() {
  clearShelf()
  console.clear()
  renderCards()
}

function clearShelf() {
  if(shelf.hasChildNodes()){
    while(shelf.hasChildNodes()){
      shelf.removeChild(shelf.lastChild);
    }
  }
}

const renderCards = () => {
  myLibrary.forEach((book, index) => {
    const newCard = document.createElement('div')
    const cardTitle = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardPages = document.createElement('div')
    const cardRead = document.createElement('div')
    
    newCard.className = 'book-card'
    cardTitle.className = 'book-title'
    cardAuthor.className = 'book-author'
    cardPages.className = 'book-pages'
    cardRead.className = 'book-read'

    cardTitle.textContent = book.title
    cardAuthor.textContent = `Written by ${book.author}`
    cardPages.textContent = `${book.pages} Pages`
    cardRead.textContent = `${book.read ? 'Read': 'Haven\'t read yet'}`

    newCard.appendChild(cardTitle)
    newCard.appendChild(cardAuthor)
    newCard.appendChild(cardPages)
    newCard.appendChild(cardRead)
    shelf.appendChild(newCard)
  })
}
render();

const popup = () => {
  document.getElementById("add-book-div").style.display = "block";
}
const minimise = () => {
  document.getElementById("add-book-div").style.display = "none";
}