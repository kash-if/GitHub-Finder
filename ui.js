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
    <div id="repos></div>
    `;
  }

}