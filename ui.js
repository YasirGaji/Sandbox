class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.country = document.getElementById("w-country");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.weather[0].main;
    this.icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°F`;
    this.dewpoint.textContent = `Temperature: ${weather.main.temp}°F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
  }
}