// Defining class UI
class UI {

  constructor() {
    this.profile = document.getElementById('profile');
  }
  
  // Show profile in UI
  showProfile(data) {
    console.log(data);
    this.profile.innerHTML=`
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid" src="${data.avatar_url}">
          <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">Visit Profile</a>
        </div>
        <div class="col-md-9 mt-3">
          <span class="badge rounded-pill bg-primary mt-2">Public Repos: ${data.public_repos}</span>
          <span class="badge rounded-pill bg-secondary mt-2">Public Gists: ${data.public_gists}</span>
          <span class="badge rounded-pill bg-success mt-2">Followers: ${data.followers}</span>
          <span class="badge rounded-pill bg-info mt-2">Following: ${data.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${data.company}</li>
            <li class="list-group-item">Website/Blog: ${data.blog}</li>
            <li class="list-group-item">Location: ${data.location}</li>
            <li class="list-group-item">Created at: ${data.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show Repos
  showRepos(repos) {
    let output = ''
    
    repos.forEach(repo => {
      output += `
        <div class="card card-body mt-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge rounded-pill bg-primary mt-2">Stars: ${repo.stargazers_count}</span>
              <span class="badge rounded-pill bg-secondary mt-2">Watchers: ${repo.watchers_count}</span>
              <span class="badge rounded-pill bg-success mt-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    })
    
    document.getElementById('repos').innerHTML = output;

  }

  showAlert(msg, className) {
    // Call clearAlert function
    this.clearAlert();
    // Create a new div element
    const alert = document.createElement('div');
    // Add classname to new div element
    alert.className = className;
    // Append text message to div element
    alert.appendChild(document.createTextNode(msg));
    // Get parent element
    const parent = document.querySelector('.searchContainer');
    // Get sibling element
    const sibling = document.querySelector('.search');
    // Insert new div element
    parent.insertBefore(alert, sibling);
    // Hide alert after 3 sec
    setTimeout(() => {
        this.clearAlert()
      }, 3000)
    }

    // Function to clear old alerts
    clearAlert() {
      // Get old alert element
      const oldAlert = document.querySelector('.alert');
      if(oldAlert) {
        // Remove old alert element from UI
        oldAlert.remove();
      }
    }

    // Function to clear profile data from UI
    clearProfile() {
      this.profile.innerHTML = '';
    }
  }