let nowDate = new Date();

function newFormat(date) {
  let hour = nowDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = nowDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = nowDate.getDay();
  let dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayWeek[dayIndex];
  return `${day}, ${hour}:${minutes}`;
}

let todayNew = document.querySelector("#current-date");
let currentTime = nowDate;
todayNew.innerHTML = newFormat(currentTime);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-city");

  let h1 = document.querySelector("#city");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#form-weather");
form.addEventListener("submit", search);

function changeTemperature(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  h2.innerHTML = "63°";
}

let fakeTemperature = document.querySelector("#c-f");
fakeTemperature.addEventListener("click", changeTemperature);

//

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  console.log(response.data);

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "7ab1e11047a0002c1e5ecb4a94e45e76";
  let apiFirstEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  let apiUrl = `${apiFirstEndpoint}q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function newSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#form-weather");
searchForm.addEventListener("submit", newSubmit);

searchCity("Lisbon");
let h1 = document.querySelector("#city");
