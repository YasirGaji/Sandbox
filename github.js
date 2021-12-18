class Github {
  constructor() {
    this.client_id = 'bc29ac8a0330b92ce65b';
    this.client_secret = '2c16babd55d8ad05916ed18387754d693cfb4473';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}