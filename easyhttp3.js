/**
 * EasyHTTP Library 3
 * library for making HTTP requests
 * 
 * 
 * @version 3.0
 * @author Yasir Gaji
 * @license PCI
 * 
 */

class easyHttp {

    // GET REQUEST
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

    // POST REQUEST
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

    // PUT REQUEST
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }
  
    // DELETE REQUEST
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    });
    const resData = await 'Resource Deleted';
    return resData;
  }
}