  // INSTANTIATING WEATHER OBJECT
const weather = new Weather('Lagos', 'Nigeria');
      ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results)
  })
  .catch(err => console.log(err));
}
