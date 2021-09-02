//@ts-check
"use strict";
let myLibrary = [{name: 'El general en su laberinto', author:'GGM', pages: 210}, {name:'The Picture of Dorian Gray', author:'Oscar Wilde', pages: 350}, {name: 'Moby-Dick', author:'Herman Melville'}]
let form = document.querySelector('.form')
let newBookButton = document.querySelector('.new-book')
let catalogueButton = document.querySelector('.catalogue')
let container = document.querySelector('.sectionMain')
// container.setAttribute('class', 'container')
let title = document.querySelector('.booktitle')
let author = document.querySelector('.authorname')
let pages = document.querySelector('.bookpages')
let submitButton = document.querySelector('.submit')
let arrayLength = 3
submitButton.addEventListener('click', addBookToLibrary)


newBookButton.addEventListener('click', addNewBook)
catalogueButton.addEventListener('click', displayCatalogue)
function addNewBook () {
    container.style.display = 'none'
    form.style.display = 'block'
    arrayLength++
}


function displayCatalogue () {
    container.style.display = 'flex'
    form.style.display = 'none'
    //Next line resets the container, so each book can be generated and added
    container.innerHTML = ''

    
    

    myLibrary.forEach(book => {
        let bookCard = document.createElement('div')
          bookCard.setAttribute('class', 'card')
         
          let cardHeader = document.createElement('div')
          cardHeader.setAttribute('class', 'card-header is-info')
          let bookCardTitle = document.createElement('h1')
          bookCardTitle.setAttribute('class', 'card-header-title title is-5')
          bookCardTitle.textContent = book.name
          let cardContent = document.createElement('div')
          cardContent.setAttribute('class', 'card-content')
          let bookCardAuthor = document.createElement('h2')
          bookCardAuthor.textContent = book.author
          bookCardAuthor.setAttribute('class', 'subtitle')
          let numberOfPages = document.createElement('h2')
          numberOfPages.setAttribute('class', 'subtitle')
          numberOfPages.textContent = book.pages === undefined ? '\b' : book.pages + ' pages'
          let cardFooter = document.createElement('div')
          cardFooter.setAttribute('class', 'card-footer')
          let deleteButton = document.createElement('button')
          deleteButton.setAttribute('class', 'button is-danger is-light card-footer-item')
          deleteButton.textContent = 'Delete'
          let readCheck = document.createElement('button')
          readCheck.textContent = 'To be Read'
          readCheck.setAttribute('class', 'button is-warning is-light card-footer-item')
        cardHeader.appendChild(bookCardTitle)
          bookCard.appendChild(cardHeader)
          cardContent.appendChild(bookCardAuthor)
          cardContent.appendChild(numberOfPages)
          bookCard.appendChild(cardContent)
          cardFooter.appendChild(deleteButton)
          cardFooter.appendChild(readCheck)
          bookCard.appendChild(cardFooter)
          container.appendChild(bookCard)
          deleteButton.addEventListener('click', () => {

              bookCard.remove()
              let index = myLibrary.findIndex(key => key.name === book.name)
              myLibrary.splice(index, 1)
            })
            readCheck.addEventListener('click', () => {
                if (readCheck.textContent === 'To be Read') {
                readCheck.textContent = 'Read'; 
                readCheck.setAttribute('class', 'button is-success is-light card-footer-item')} else {
                    readCheck.textContent = 'To be Read'; readCheck.setAttribute('class', 'button is-info is-light card-footer-item')}
                })
})
}
function MakeBookObjects (title, author, pages, read) {
    this.name = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
function addBookToLibrary() {
    let titleData = title.value
    let authorData = author.value
    let pagesData = pages.value
    myLibrary.push(new MakeBookObjects(titleData, authorData, pagesData))
    //Resets the fields
    title.value = ''
    author.value = ''
    pages.value = ''
    console.log(myLibrary)
}
