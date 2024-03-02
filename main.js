const bookName = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const myLibrary = [];
const read = document.querySelector("#readit");

let booknumber = 0;

function Book(bookname, author, pages, readit) {
    return {
        bookname,
        author,
        pages,
        readit,
        id: booknumber++,
    };
}

const bookshelf = document.createElement("div");
bookshelf.classList.add("bookshelf");
function render() {
    const body = document.querySelector("body");
    bookshelf.style.display = "flex";

    for (const book of myLibrary) {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");

        const bookName = document.createElement("h5");
        const author = document.createElement("h6");
        const pages = document.createElement("h6");
        const readStatus = document.createElement("h6");
        const deleteButton = document.createElement("button");

        bookName.textContent = `Book Name: ${book.bookname}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
        readStatus.textContent = `Have You Read It: ${book.readit}`;
        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-button");
        bookContainer.classList.add("book");

        deleteButton.addEventListener("click", () => {
            bookContainer.remove();
        });
        const bookIndex = myLibrary.findIndex((b) => b.id === book.id);
        if (bookIndex !== -1) {
            myLibrary.splice(bookIndex, 1);
        }

        bookContainer.append(bookName, author, pages, readStatus, deleteButton);
        bookshelf.appendChild(bookContainer);
    }

    body.appendChild(bookshelf);
}

// Prevent form submission
function clearFormFields() {
    bookName.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
}
function doMagic(thebook) {
    myLibrary.push(thebook);
    render();
}
function addbooktolibrary() {
    const ubook = bookName.value;
    const uauthor = author.value;
    const upages = pages.value;
    const uread = read.value;

    const newbook = new Book(ubook, uauthor, upages, uread);

    doMagic(newbook);
    clearFormFields();
}

const newBookBtn = document.querySelector("#newbook");

// new book button
newBookBtn.addEventListener("click", (e) => {
    const form = document.querySelector(".form");

    form.style.display = "block";
});

bookName.addEventListener("input", (e) => {
    if (bookName.validity.valueMissing) {
        e.preventDefault();
        bookName.setCustomValidity("Please enter a book name.");
    } else if (bookName.validity.tooShort) {
        e.preventDefault();
        bookName.setCustomValidity("Please enter a valid  book name.");
    } else {
        bookName.setCustomValidity("");
    }
});

author.addEventListener("input", (e) => {
    if (author.validity.tooShort) {
        author.setCustomValidity("Please enter an valid author name.");
        e.preventDefault();
    } else {
        author.setCustomValidity("");
    }
});

pages.addEventListener("input", (e) => {
    if (pages.validity.rangeOverflow) {
        e.preventDefault();
        pages.setCustomValidity("Please enter the number below of 1000.");
    } else if (pages.validity.rangeUnderflow) {
        pages.setCustomValidity("Please enter the number  above of 10.");
        e.preventDefault();
    } else {
        pages.setCustomValidity("");
    }
});

read.addEventListener("change", (e) => {
    if (read.value === "") {
        e.preventDefault();
        read.setCustomValidity("Please specify if you have read the book.");
    } else {
        read.setCustomValidity("");
    }
});
const submission = document.getElementById("submit");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addbooktolibrary();
});
