const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, "Read");
const book2 = new Book("The Great Gatsby ", "F. Scott Fitzgerald 2", 500, "Not Read");

myLibrary.push(book1);
myLibrary.push(book2);

const tableBody = document.querySelector(".table-body");

// Function that displays the books in the library
function displayBooks() {
    const tableBody = document.querySelector(".table-body");

    tableBody.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement("tr");
        row.setAttribute("data-index", i);

        // Create a delete button for each row
        const deleteButton = document.createElement("td");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px">
                                    <path
                                        d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                    />
                                </svg>`;

        // Add event listener to the delete button
        deleteButton.addEventListener("click", () => {
            const index = deleteButton.parentElement.getAttribute("data-index");
            myLibrary.splice(index, 1);
            displayBooks();
        });

        row.innerHTML = `<td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>
                        <td>${myLibrary[i].status}</td>`;
        tableBody.appendChild(row);
        row.appendChild(deleteButton); // Append the delete button to the current row
    }
}

// Function that adds a book to the library
function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

const addBookButton = document.querySelector(".add-book");
const popupOverlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");
const addBookForm = document.getElementById("add-book-form");

addBookButton.addEventListener("click", () => {
    // Display the overlay and popup form
    popupOverlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    // Hide the overlay and popup form when the close button is clicked
    popupOverlay.style.display = "none";
});

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    popupOverlay.style.display = "none";
    displayBooks();
});

displayBooks();
