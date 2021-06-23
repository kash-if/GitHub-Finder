// Defining class GitHub
class GitHub {

  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
 
  // Function to get user data from GitHub using FETCH API
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }

}