const log = console.log;

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
                  `;
  log({ list, row });
  list.appendChild(row);
  // const td = document.createElement('td');
  // tr.appendChild();
}

UI.prototype.clearFields = function() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = ''; 
}

// Event Listeners
const bookFormUI = document.querySelector('#book-form');

bookFormUI.addEventListener('submit', function(e) {
  // Get form values
  const titleValUI = document.querySelector('#title').value;
  const authorValUI = document.querySelector('#author').value;
  const isbnValUI = document.querySelector('#isbn').value; 
  // log({ titleValUI, authorValUI, isbnValUI });

  // Instantiate UI
  const book = new Book(titleValUI, authorValUI, isbnValUI);
  
  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear fields 
  ui.clearFields();
  
  e.preventDefault();
});
// log({ bookFormUI});