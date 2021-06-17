// Instantiate GitHub class
const github = new GitHub;

// Instantiate UI class
const ui = new UI;

// Search Input
const searchInput = document.getElementById('searchUser');

// SearchInput Event Listener
searchInput.addEventListener('keyup', (e) => {
  // Get input text
  const inputText = e.target.value;
  
  // Check whether input data is not spaces
  if(inputText !== '') {
    // Make HTTP request and get user data from github
    github.getUser(inputText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
        } else {
          //Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
  }
})