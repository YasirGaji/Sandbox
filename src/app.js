{   // COMMON JS MODULE
// const person = require('./mymodule1');

// console.log(person.name);

  // ES2015 MODULE
// import { person } from './mymodule2';

// import * as mod2 from './mymodule2';

// console.log(mod2.person.age);
}

import { http } from './easyHttp';
import { ui } from './ui';

  // EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

document.querySelector('#posts').addEventListener('click', deletePost);

document.querySelector('#posts').addEventListener('click', enableEdit);



function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post added', 'alert alert-success');
    ui.clearFields();

    getPosts();
  })
  .catch(err => console.log(err));
}

function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;

    if(confirm('Are you sure')) {
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
    } 
  }

  e.preventDefault();
}

// https://jsonplaceholder.typicode.com/posts