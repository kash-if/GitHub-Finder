// Defining class GitHub
class GitHub {
 
  // Function to get user data from GitHub using FETCH API
  async getUser(user) {
    const fetchResponse = await fetch(`https://api.github.com/users/${user}`);

    const profileData = await fetchResponse.json();

    return {
      profile: profileData
    }
  }

}