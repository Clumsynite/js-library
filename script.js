const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')
const shelf = document.getElementById('bookshelf')
const addBtn = document.getElementById('add-btn')
const empty = document.getElementById('empty')

let myLibrary = [];
// localStorage.setItem("books", JSON.stringify(names));
if(localStorage.getItem('books') == null){
  localStorage.setItem('books', JSON.stringify(myLibrary))
}else {
  myLibrary = JSON.parse(localStorage.getItem("books"))
}

setInterval(() => {
  if(localStorage.getItem('books') == '[]'){empty.style.display = 'block'}
  else{empty.style.display = 'none'}
}, 100)

class Book {
  constructor(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info = () => {
    return `${title} by ${author}, ${pages} Pages, ${read? 'read': 'not read yet'}`
  }
}
const book1 = new Book('book1', 'me', 69, true)
// myLibrary.push(book1)

const book2 = new Book('book2', 'you', 420, false)
// myLibrary.push(book2)

function addBookToLibrary() {
  const title = bookTitle.value;
  const author = bookAuthor.value
  const pages = bookPages.value
  const read = bookRead.checked

  if(title == '' || author == '' || pages == ''){
    alert("You can't just add nothing in your shelf")
    return false
  }

  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  localStorage.setItem('books', JSON.stringify(myLibrary))
  bookTitle.value = ''
  bookAuthor.value = ''
  bookPages.value = ''
  bookRead.checked = false
  render()
}

function render() {
  clearShelf()
  renderCards()
}

function clearShelf() {
  if(shelf.hasChildNodes()){
    while(shelf.hasChildNodes()){
      shelf.removeChild(shelf.lastChild);
    }
  }
}

const deleteCard = elem => {
  const id = elem.path[2].getAttribute('data-number')
  const agree = confirm('Are you sure you want to delete this book\nThis process can\'t be reversed')
  agree? myLibrary.splice(id, 1) : false
  localStorage.setItem('books', JSON.stringify(myLibrary))
  render()
}
const readToggle = elem => {
  const id = elem.path[1].getAttribute('data-number')
  myLibrary[id].read = myLibrary[id].read ? false : true
  localStorage.setItem('books', JSON.stringify(myLibrary))
  render(); 
}

const renderCards = () => {
  JSON.parse(localStorage.getItem("books")).forEach((book, index) => {
    const newCard = document.createElement('div')
    const cardTitle = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardPages = document.createElement('div')
    const cardRead = document.createElement('div')
    const cardDelete = document.createElement('button')
    const divRemove = document.createElement('div')
    const toggle = document.createElement('button')

    newCard.className = 'book-card'
    newCard.setAttribute('data-number', index)
    cardTitle.className = 'book-title'
    cardAuthor.className = 'book-author'
    cardPages.className = 'book-pages'
    cardRead.className = 'book-read'
    cardDelete.className = 'remove'
    toggle.className = 'toggle'
    divRemove.className = 'remove-buttons'
    
    cardTitle.textContent = book.title
    cardAuthor.textContent = `Written by ${book.author}`
    cardPages.textContent = `${book.pages} Pages`
    cardRead.textContent = `${book.read ? 'Completed': 'Haven\'t read yet'}`
    cardDelete.textContent = 'X'
    cardDelete.title = 'Delete Book'
    cardDelete.addEventListener('click', deleteCard)
    toggle.textContent = book.read ? 'Mark Unread' : 'Mark Read'
    toggle.title = 'Change Read Status'
    toggle.addEventListener('click', readToggle)
    
    divRemove.appendChild(cardDelete)
    newCard.appendChild(divRemove)
    newCard.appendChild(cardTitle)
    newCard.appendChild(cardAuthor)
    newCard.appendChild(cardPages)
    newCard.appendChild(cardRead)
    newCard.appendChild(toggle)
    shelf.appendChild(newCard)
  })
}
render();

const popup = () => {
  document.getElementById("add-book-div").style.display = "block";
  document.getElementById("popup-btn").style.display = "none";
}
const minimise = () => {
  document.getElementById("add-book-div").style.display = "none";
  document.getElementById("popup-btn").style.display = "block";
}

// let deleteButton = document.querySelectorAll('.remove')
// let delButtons = Array.from(deleteButton)

// delButtons.forEach(btn => {
//   btn.addEventListener('click', elem => {
//     const id = elem.path[2].getAttribute('data-number')
//     console.log(id)
//     if(id == 0){myLibrary.shift()}
//     if(id == myLibrary.length){myLibrary.pop()}
//     deleteButton = document.querySelectorAll('.remove')
//     render()
//   })
// })