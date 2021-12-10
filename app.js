  // INITIALIZING CONSTRUCTORS IN ES6
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
};

  // UI PROTOTYPE FIELDS IN ES6
class UI {
  addBookToList(book) {
    const list = document.getElementById('book_list'); // assigning list

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  };

  showAlert(message, className) {
      // CREATION OF DIV ELEMENT
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

      // ASSIGNING VARIABLES
    const container = document.querySelector('.container');
    const form = document.querySelector('#book_form');

    container.insertBefore(div, form);
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000); // this inserts the div before the form element in the container, then takes it out after 3secs
  };

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  };

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };
};

  // DECLARING EVENT LISTENERS
document.getElementById('book_form').addEventListener('submit', function(e){
  // ASSIGNING VARIABLES
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;

const book = new Book(title, author, isbn); // this instantiates the book to an object

const ui = new UI(); // this instantiates the UI

if(title === '' || author === '' || isbn === '') {
  ui.showAlert('Do fill in all the apropriate fields', 'error');
} else {
  ui.showAlert('Book added successfully!', 'success');

  ui.addBookToList(book);
  
  ui.clearFields();
}

e.preventDefault();
}); // this executes when the submit button is clicked

document.getElementById('book_list').addEventListener('click', function(e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showAlert('Book Removed Successfully!', 'success');

  e.preventDefault();
}); // this event executes when the remove button is clicked