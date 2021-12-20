  // INSTANTIATING WEATHER OBJECT
const ui = new UI();
      storage = new Storage();
      weatherLocation = storage.getLocationData();
      weather = new Weather(weatherLocation.city, weatherLocation.state);
      

      

      // EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  storage.setLocationData(city, state);

  getWeather();

  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results)
  })
  .catch(err => console.log(err));
}
