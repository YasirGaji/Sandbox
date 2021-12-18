  // SEARCH INPUT
const searchUser = document.getElementById('searchUser');

  // INSTANTIATIONS
const github = new Github();
      ui = new UI();  

searchUser.addEventListener('keyup', function(e) {
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // SHOW  ALERT
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // SHOW THE PROFILE
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // CLEAR THE PROFILE
    ui.clearProfile();
  }
});