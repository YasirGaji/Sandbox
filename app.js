const data = {
  name: 'Micheal Lee',
  username: 'micheal',
  email: 'micheal@gmail.com'
}

const http = new easyHttp ();

  // GET USERS
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .then(err => console.log(err))

  // POST USERS
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .then(err => console.log(err))

  // PUT USERS
http.put('https://jsonplaceholder.typicode.com/users/3', data)
.then(data => console.log(data))
.then(err => console.log(err))