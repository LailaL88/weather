const btn = document.querySelector(".btn");
let city = document.querySelector(".inputCity");

function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=edcf838ddc8b8a2df699fb7127160fda&units=metric')
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