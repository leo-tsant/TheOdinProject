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

function addRow(obj) {
  // Get the table's tbody element
  const tbody = document.querySelector(".book-info tbody");

  // Create a new row and cells
  const newRow = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const statusCell = document.createElement("td");

  // Set the text content of cells
  titleCell.textContent = obj.title;
  authorCell.textContent = obj.author;
  pagesCell.textContent = obj.pages;
  statusCell.textContent = obj.status;

  // Append the cells to the row
  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(pagesCell);
  newRow.appendChild(statusCell);

  // Append the row to the tbody
  tbody.appendChild(newRow);
}

addRow(book1);
addRow(book2);
