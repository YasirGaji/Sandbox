const http = new easyHTTP();

  // GET POST | GET METHOD
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

  // CREATE POST | POST METHOD
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

  // UPDATE POST | PUT METHOD
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

  // DELETE POST | DELETE METHOD
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});