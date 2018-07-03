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

UI.prototype.showAlert = function(message, className) {
  // Create div element
  const alertMsg = document.createElement('div');

  // Add the class 
  alertMsg.className = `alert ${className}`;

  // Add message as text for alert div 
  alertMsg.appendChild(document.createTextNode(message));
  
  // Get parent
  const container = document.querySelector('.container');
  // Get sibling for div - to put after new element
  const bookForm = document.querySelector('#book-form');

  // Insert alert
  container.insertBefore(alertMsg, bookForm);

  // Remove alert after 3 seconds
  setTimeout(() => {
    // grab element with class alert and remove it 
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    /* we get the target of the a tag and ultimately want the a tag
    a : td : tr => so we take the parentElement twice and remove  
    */
    target.parentElement.parentElement.remove();
  }
}

// Clears all input fields in form
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

  // Validate book input 
  if (titleValUI === "" || authorValUI === "" || isbnValUI === "") {
    // Error alert
    ui.showAlert(`Please fill in all fields`, 'error');
  } else {
    // Book added notification (alert)
    ui.showAlert(`Book successfully added`, 'success');
    // Add book to list
    ui.addBookToList(book);

    // Clear fields 
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for removing books
document.querySelector('#book-list').addEventListener('click', function(e) {
  // Instantiate UI - to access non static prototype method we need to instantiate a new UI object
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert(`Book successfully deleted`, 'success');
  e.preventDefault();
})

// log({ bookFormUI});

/* If we have something that is going to show up more than once with the same class, or something that is not there when the page loads and is dynamically added - we'll have to use event delegation */