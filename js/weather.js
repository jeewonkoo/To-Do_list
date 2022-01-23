const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "acace98e2b857e60b45ef9c19464ff27";

function locationFind(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        weather.innerText = ` ${data.weather[0].main} / ${data.main.temp} celcius degree /`;
        city.innerText = data.name;
      });
  }

function locationError() {
    alert("Failed to locate you. No weather information.");
}

navigator.geolocation.getCurrentPosition(locationFind, locationError);