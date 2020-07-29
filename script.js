const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('book-read');
const table = document.getElementById('shelf')
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
  clearTable()
  console.clear()
  myLibrary.forEach((book, index) => {
    console.log(index + ' ' + book.info())
    const row = document.createElement('tr')
    const cellTitle = document.createElement('td')
    cellTitle.textContent = book.title
    row.appendChild(cellTitle)
    const cellAuthor = document.createElement('td')
    cellAuthor.textContent = book.author
    row.appendChild(cellAuthor)
    const cellPages = document.createElement('td')
    cellPages.textContent = book.pages
    row.appendChild(cellPages)
    const cellRead = document.createElement('td')
    cellRead.textContent = book.read
    row.appendChild(cellRead)
    table.appendChild(row)
  })
}

function clearTable() {
  if(table.childNodes.length>2){
    while(table.childNodes.length>2){
        table.removeChild(table.lastChild);
    }
  }
}

render();