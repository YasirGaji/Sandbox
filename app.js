  // SEARCH INPUT
const searchUser = document.getElementById('searchUser');

  // INSTANTIATING GITHUB API
const github = new Github();

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
          showProfile(data.profile);
        }
      })
  } else {
    // CLEAR THE PROFILE
    clearProfile();
  }
});