const main = document.querySelector('main')
const cardNewBook = document.querySelector('.card')
const newBook = document.querySelector('.button--new')
const inventario = document.querySelector('.button--inventario')
const add = document.querySelector('.button--enviar')
const checkBox = document.querySelector('.checkbox')
const title = document.querySelector('#titulo')
const author = document.querySelector('#autor')
const pages = document.querySelector('#paginas')
const bookCard = document.querySelector('.book--card')
const myLibrary = [];
const book = document.querySelector('#book')
inventario.addEventListener('click', displayLibrary)
newBook.addEventListener('click', newBookCard)
add.addEventListener('click', addBookToLibrary)
function addBookToLibrary() {
  let titleData = title.value
  let authorData = author.value
  let pagesData = pages.value
  let read = checkBox.checked === true ? true : false
  myLibrary.push(new MakeBookObjects(titleData, authorData, pagesData, read))
    console.log(myLibrary)
}
function displayLibrary () {
  cardNewBook.remove()
  myLibrary.forEach(b => {
    let newOne = document.createElement('section')
    newOne.setAttribute('class', 'book--card card')
    main.appendChild(newOne)
  }
    )
  }
    
function newBookCard () {
  bookCard.remove()
  main.appendChild(cardNewBook)
}
function MakeBookObjects (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
MakeBookObjects.prototype.printInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

myLibrary.push(new MakeBookObjects('Cien anos de soledad'))
console.log(myLibrary)