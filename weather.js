class Weather {
  constructor(city, state) {
    this.apikey = "18c9ca4a74ae8b708498e8d99fbeda04";
    this.city = city;
    this.state = state;
  }

    // GET WEATHER
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}&units=imperial`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}