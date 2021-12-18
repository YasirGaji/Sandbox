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
          // SHOW ERROR MESSAGE
          showError('User not found');
        } else {
          // SHOW THE PROFILE
          ui.showProfile(data.profile);
        }
      })
  } else {
    // CLEAR THE PROFILE
    //clearProfile();
  }
});