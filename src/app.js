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

  // GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// https://jsonplaceholder.typicode.com/posts