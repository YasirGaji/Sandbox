document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    })
}