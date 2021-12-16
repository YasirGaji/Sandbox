document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

  //CONDITIONS

function getText() {
  fetch('text.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    })
} // this condition exerts getting the "text.txt" data and displaying it in the output div

function getJson() {
  fetch('post.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);

      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      })

      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    })
} // this condition exerts getting the "posts.json" data and displaying it in the output div

function getExternal() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);

      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.body}</li>`
      })

      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    })
} // this condition exerts getting the external "API" data and displaying it in the output div