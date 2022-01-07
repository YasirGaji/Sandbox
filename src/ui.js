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

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.postsContainer');

    const posts = document.querySelector('#posts');
    container.insertBefore(div,posts);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
}

export const ui = new UI();