class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    console.log(posts);
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.body}</p>

            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="uil uil-pen"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="uil uil-times"></i>
            </a>
          </div>
        </div>
      `;
    });
    
    this.post.innerHTML = output;
  }
}

export const ui = new UI();