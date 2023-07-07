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
    const bookname2 = document.createElement('h5');
    const pages2 = document.createElement('h6');
    const author2 = document.createElement('h6');
    const book = myLibrary[i];
    const read2 = document.createElement('h6');
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = 'Delete';
    deletebtn.classList.add('add');
    if (book.b === undefined || book.a === undefined) {
      break;
    } else {
      books.append(bookname2, pages2, author2, read2, deletebtn);
      books.classList.add('book_shelf');
      BookShelf.appendChild(books);
      body.appendChild(BookShelf);
      bookname2.innerHTML = `Book Name : ${book.b}`;
      pages2.innerHTML = `Pages : ${book.p}`;
      read2.innerHTML = `Have You Read It : ${book.a}`;
      author2.innerHTML = `Author : ${book.r}`;
      BookShelf.style.display = 'flex';
    }
    //  delete book button
    deletebtn.addEventListener('click', () => {
      books.remove();
    });
  }

  myLibrary.length = 0;
}

function addbooktolibrary() {
  const newbook = new Book(
    bookname.value,
    author.value,
    pages.value,
    // eslint-disable-next-line comma-dangle
    readit.value
  );
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
  readit.valu = '';
  // Prevent form submission
});
