  // INSTANTIATING WEATHER OBJECT
const weather = new Weather('Lagos', 'Nigeria');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err));
}
