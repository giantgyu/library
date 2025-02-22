const library = document.querySelector("#library");
const newBookDialog = document.querySelector("#add-new-book-dialog");
const showNewBookDialogBtn = document.querySelector("#add-new-book-btn");
const closeNewBookDialogBtn = document.querySelector("#add-new-book-dialog button");
showNewBookDialogBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});
const deleteBookConfirmationDialog = document.querySelector("#delete-book-confirmation-dialog");

closeNewBookDialogBtn.addEventListener("click", () => {

    displayLibrary();
    newBookDialog.close();
});


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

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    library.replaceChildren();
    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement("div");
        bookCard.innerText = `${element.title}
        by: ${element.author}
        Status: ${element.isRead ? "Read" : "Not yet read"}
        `;
        bookCard.dataset.id = index;
        library.appendChild(bookCard);
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.innerText = `Delete`;
        deleteBookBtn.addEventListener("click", () => {
            library.querySelector(`div[data-id="${index}"]`).remove();
        });
        bookCard.appendChild(deleteBookBtn);
    });
}

displayLibrary();