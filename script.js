async function getWeather() {
    const apiKey = '518f0d0a7ee76a4e352d4be58bc147e4'; // ← Replace with your real key
    const city = document.getElementById('cityInput').value;
  
    if (!city) return;
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
  
      const data = await response.json();
  
      if (data.cod !== 200) {
        document.getElementById('weatherDisplay').innerHTML = `<p>City not found.</p>`;
        return;
      }
  
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p><strong>${data.main.temp} °C</strong></p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
      `;
      
      document.getElementById('weatherDisplay').innerHTML = weatherHTML;
  
    } catch (error) {
      document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching data.</p>`;
    }
  }
  