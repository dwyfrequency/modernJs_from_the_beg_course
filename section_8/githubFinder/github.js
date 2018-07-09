class Github {
  constructor() {
    this.client_id = config.GITHUB_KEY;
    this.client_secret = config.GITHUB_SECRET_KEY;
    // setting repo count so we dont get back every repo
    this.repos_count = 5; 
    this.repos_sort = 'created: asc';
  }

  // getUser :: a -> { b } 
  async getUser(user) {
    /*Get user and their repos from the github api*/
    const userEndpoint = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const repoEndpoint = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    
    const profileResponse = await fetch(userEndpoint);
    const profile = await profileResponse.json();

    const repoResponse = await fetch(repoEndpoint);
    const repos = await repoResponse.json();

    // in es6 if the variable name is the same as the key, you can just pass it in and it'll be destructured 
    // same as doing {profile : profile}
    return { profile, repos };
  }

  get Keys() {
    return { 'id' : this.client_id, 'secret' : this.client_secret};
  }
}