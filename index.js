function formatDate() {
  let currentTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();

  let date = ` ${day} ${hour}:${minute}`;

  alert(`${date}`);
}

function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "568bc82217817a50d72c54010f9e04a0";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = 66;
}
function convertToCelcius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = 19;
}

let form = document.querySelector("#citysearch-form");
form.addEventListener("submit", search);
