const library = document.querySelector("#library");
const newBookDialog = document.querySelector("#add-new-book-dialog");

const closeAddNewBookDialogBtn = document.querySelector("#close-add-new-book-dialog");
closeAddNewBookDialogBtn.addEventListener("click", () => {
    newBookDialog.close();
    clearInputs();
});

const showNewBookDialogBtn = document.querySelector("#add-new-book-btn");
const addNewBookDialogBtn = document.querySelector("#add-new-book-dialog button");

showNewBookDialogBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});
const deleteBookConfirmationDialog = document.querySelector("#delete-book-confirmation-dialog");

addNewBookDialogBtn.addEventListener("click", () => {

    const sampleOnly = new Book(bookTitleInput.value, bookAuthorInput.value);
    console.log("new book added: " + sampleOnly);
    myLibrary.push(sampleOnly);
    console.table(myLibrary);

    displayLibrary();
    newBookDialog.close();
    clearInputs();
});

//const for add new book input boxes
const bookTitleInput = newBookDialog.querySelector("#book-title");
const bookAuthorInput = newBookDialog.querySelector("#book-author");

//clear inputs of Add New Book button
function clearInputs() {
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
};

const myLibrary = [
    {
        title: "The Hidden",
        author: "Sam Andy",
        isRead: true,
    },
    {
        title: "Dive Hurricane",
        author: "Mario Jizzer",
        isRead: false,
    }
];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function displayLibrary() {
    library.replaceChildren();
    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement("div");
        bookCard.innerText = `${element.title}
        by: ${element.author}
        `;
        // Status: ${element.isRead ? "Read" : "Not yet read"}
        bookCard.dataset.id = index;
        library.appendChild(bookCard);

        //Adding the delete book card button
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.innerText = `Delete`;
        deleteBookBtn.addEventListener("click", () => {
            myLibrary.splice(Number(bookCard.dataset.id), 1);
            displayLibrary();
        });
        bookCard.appendChild(deleteBookBtn);

        //Adding the toggle read status button
        const readBtn = document.createElement("button");

        readBtn.innerText = `${element.isRead ? "Read" : "Not yet read"}`
        readBtn.addEventListener("click", () => {
            element.isRead = !element.isRead;
            displayLibrary();
        });
        bookCard.appendChild(readBtn);
    });
};


displayLibrary();