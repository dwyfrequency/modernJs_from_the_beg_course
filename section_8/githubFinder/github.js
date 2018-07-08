class Github {
  constructor() {
    this.client_id = config.GITHUB_KEY;
    this.client_secret = config.GITHUB_SECRET_KEY;
  }

  // getUser :: a -> { b } 
  async getUser(user) {
    /*Get user from github api*/
    const userEndpoint = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    
    const profileResponse = await fetch(userEndpoint);
    const profile = await profileResponse.json();

    // in es6 if the variable name is the same as the key, you can just pass it in and it'll be destructured
    return { profile };
  }

  get Keys() {
    return { 'id' : this.client_id, 'secret' : this.client_secret};
  }
}