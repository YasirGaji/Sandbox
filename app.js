  // INITIALIZING CONSTRUCTORS
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
} // this is the book constructor

function UI() {} // this is the Ui constructor having no arguements and parameters


UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book_list'); // assigning list

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);

}; // this adds the addBookToList function to the UI prototype


  // DECLARING EVENT LISTENERS
document.getElementById('book_form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn); // this instantiates the book to an object
  const ui = new UI(); // this instantiates the UI

  ui.addBookToList(book);
  
  e.preventDefault();
});