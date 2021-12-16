function easyHTTP() {
  this.http = new XMLHttpRequest();
}

  // GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status)
      console.log('Error: ' + self.status);
    }
  }

  this.http.send();
}

  // POST REQUEST
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);   
  }

  this.http.send(JSON.stringify(data));
}

  // PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);   
  }

  this.http.send(JSON.stringify(data));
}

  // DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, "Post deleted");
    } else {
      callback('Error:' + self.http.status)
      console.log('Error: ' + self.status);
    }
  }

  this.http.send();
}
  
