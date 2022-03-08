"use strict";

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
const shelf = document.createElement('div')
shelf.setAttribute('class', 'shelf')
main.appendChild(shelf)
shelf.style.display = 'none'
inventario.addEventListener('click', displayLibrary)
newBook.addEventListener('click', newBookCard)
add.addEventListener('click', addBookToLibrary)

let test = document.createElement('p')
test.textContent = 'test'
shelf.appendChild(test)
myLibrary.forEach(b => {
  let book = document.createElement('div')
  let bookTitle = document.createElement('h1')
  let author = document.createElement('h2')
  let pages = document.createElement('h2')

  // author.setAttribute('class', 'title--card')
  // pages.setAttribute('class', 'title--card')
  // bookTitle.setAttribute('class', 'title--card')
  bookTitle.textContent = b.title
  author.textContent = b.author
  pages.textContent = b.pages
  // book.setAttribute('class', 'card')
  book.appendChild(bookTitle)
  book.appendChild(author)
  book.appendChild(pages)
  shelf.appendChild(book)
}) 

function addBookToLibrary() {
  let titleData = title.value
  let authorData = author.value
  let pagesData = pages.value
  let read = checkBox.checked === true ? true : false
  myLibrary.push(new MakeBookObjects(titleData, authorData, pagesData, read))
    //Resets the fields
    title.value = ''
    author.value = ''
    pages.value = ''
}

 function hideorshow(x) {
   x.style.display === 'block' ? x.style.display = 'none' : x.style.display = 'block'
 }

function displayLibrary () {
  shelf.style.display = 'flex'
  cardNewBook.style.display = 'none'
  }
    
function newBookCard () {
  cardNewBook.style.display = 'flex'
  shelf.style.display ='none'
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