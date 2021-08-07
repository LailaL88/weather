import {api_key} from "./config.js";
const btn = document.querySelector(".btn");
let city = document.querySelector(".inputCity");

function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + api_key+ '&units=metric')
    .then(response => response.json())
    .then(data => {
       let p = document.createElement("p");
       let icon = document.createElement("img");
       icon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
       p.innerHTML = "Temperature: " + "<br class='br'>" + data.main.temp + " °C " + "<br>" + data.weather[0].description + "<br>";
       document.querySelector(".weather").append(p);
       document.querySelector(".weather").append(icon);
    })
}

btn.addEventListener("click", function(){
    document.querySelector(".weather").innerHTML = "";
    getWeather();
})