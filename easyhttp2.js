/**
 * EasyHTTP Library 2
 * library for making HTTP requests
 * 
 * 
 * @version 2.0
 * @author Yasir Gaji
 * @license PCI
 * 
 */

class EasyHttp {
    // GET REQUEST
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}