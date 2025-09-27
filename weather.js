const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
navigator.geolocation.getCurrentPosition(pos => {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("weather").innerText = 
        `Location: ${data.name}, Temp: ${data.main.temp}°C, Condition: ${data.weather[0].description}`;
    });
});
