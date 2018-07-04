const log = console.log;

// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {};
  addBookToList(book) {
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
  }

  showAlert(message, className) {
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

  deleteBook(target) {
    if (target.className === 'delete') {
      /* we get the target of the a tag and ultimately want the a tag
      a : td : tr => so we take the parentElement twice and remove  
      */
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();
    // add books from LS to the ui
    books.forEach(book => ui.addBookToList(book));
  }

  static addBook(book) {
    // Get the books from ls - using object name b/c static methods 
    const books = Store.getBooks();
    // Add the book passed in 
    books.push(book);
    // Set new book list in local storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    log(isbn)
    const books = Store.getBooks();
    // filters out book if its isbn === the isbn passed in  
    const newBookArr = books.filter(obj => obj.isbn !== isbn);
    localStorage.setItem('books', JSON.stringify(newBookArr));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());


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
    // Add book to list
    ui.addBookToList(book);
   
    // Add to LS
    Store.addBook(book);

    // Book added notification (alert)
    ui.showAlert(`Book successfully added`, 'success');
   
    // Clear fields 
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for removing books
document.querySelector('#book-list').addEventListener('click', function(e) {
  // Instantiate UI - to access non static prototype method we need to instantiate a new UI object
  const ui = new UI();
  log(`target for deletion: ${e.target}`)
  
  // Delete book
  ui.deleteBook(e.target);
  
  // Remove from LS
  /*e.target == <a>; parentElement == <td> that wraps the <a> tag
   previousElementSibling: returns the Element immediately prior to the specified one in its parent's children list
   textContent: the text content of a node and its descendants  */
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert(`Book successfully deleted`, 'success');
  e.preventDefault();
})

// log({ bookFormUI});

/* If we have something that is going to show up more than once with the same class, or something that is not there when the page loads and is dynamically added - we'll have to use event delegation */