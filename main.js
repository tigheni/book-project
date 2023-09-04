const form = document.querySelector('.form');
const body = document.querySelector('body');
const btn = document.querySelector('#newbook');
const bookname = document.querySelector('#name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const myLibrary = [];
const readit = document.querySelector('#readit');

const BtnSubmit = document.getElementById('bsubmit');

// eslint-disable-next-line no-shadow
function Book(bookname, author, pages, readit) {
  this.b = bookname;
  this.a = author;
  this.p = pages;
  this.r = readit;
}
const BookShelf = document.createElement('div');
BookShelf.classList.add('booksflex');
// push book to array

function render() {
  // eslint-disable-next-line no-plusplus

  for (let i = 0; i < myLibrary.length; i += 1) {
    const books = document.createElement('div');
    const bookcase2 = document.createElement('h5');
    const pages2 = document.createElement('h6');
    const author2 = document.createElement('h6');
    const book = myLibrary[i];
    const read2 = document.createElement('h6');
    const deletion = document.createElement('button');
    deletion.innerHTML = 'Delete';
    deletion.classList.add('add');
    if (book.b === undefined || book.a === undefined) {
      break;
    } else {
      books.append(bookcase2, pages2, author2, read2, deletion);
      books.classList.add('book_shelf');
      BookShelf.appendChild(books);
      body.appendChild(BookShelf);
      bookcase2.innerHTML = `Book Name : ${book.b}`;
      pages2.innerHTML = `Pages : ${book.p}`;
      author2.innerHTML = `Have You Read It : ${book.a}`;
      read2.innerHTML = `Author : ${book.r}`;
      BookShelf.style.display = 'flex';
    }
    //  delete book button
    deletion.addEventListener('click', () => {
      books.remove();
    });
    myLibrary.splice(i, 1);
  }
}
function addbooktolibrary(e) {
  const ubook = bookname.value;
  const uauthor = author.value;
  const upages = pages.value;
  const ureadit = readit.value;
  if (
    bookname.value === '' ||
    author.value === '' ||
    pages.value === '' ||
    readit.value === ''
  ) {
    e.preventDefault();
  }
  const newbook = new Book(ubook, uauthor, upages, ureadit);

  myLibrary.push(newbook);
  render();
}
// new book button
btn.addEventListener('click', () => {
  form.style.display = 'block';
});

BtnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  addbooktolibrary();
  bookname.value = '';
  author.value = '';
  pages.value = '';
  readit.value = '';
  // Prevent form submission
});
