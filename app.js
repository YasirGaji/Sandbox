const http = new easyHTTP();

  // GET USERS
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .then(err => console.log(err))