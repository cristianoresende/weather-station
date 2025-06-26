function getWeatherIcon(code) {
      const icons = {
        0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 48: "🌫️",
        51: "🌦️", 53: "🌦️", 55: "🌧️", 56: "🌧️", 57: "🌧️",
        61: "🌦️", 63: "🌧️", 65: "🌧️", 66: "🌧️", 67: "🌧️",
        71: "🌨️", 73: "🌨️", 75: "❄️", 77: "❄️",
        80: "🌦️", 81: "🌧️", 82: "🌧️", 85: "🌨️", 86: "❄️",
        95: "⛈️", 96: "⛈️", 99: "⛈️"
      };
      return icons[code] || "❓";
    }

    async function getWeatherByCity() {
      const city = document.getElementById('cityInput').value.trim();
      if (!city) {
        document.getElementById('weather').innerText = 'Please enter a city name.';
        return;
      }

      try {
        // Step 1: Get coordinates from city name
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          document.getElementById('weather').innerText = 'City not found.';
          return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // Step 2: Get weather data
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&timezone=auto`);
        const weatherData = await weatherRes.json();
        const temp = weatherData.current.temperature_2m;
        const code = weatherData.current.weathercode;
        const icon = getWeatherIcon(code);

        document.getElementById('weather').innerHTML = `
          <p><span class="icon">${icon}</span></p>
          <p><strong>City:</strong> ${name}, ${country}</p>
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Weather Code:</strong> ${code}</p>
        `;
      } catch (error) {
        document.getElementById('weather').innerText = 'Error fetching weather data.';
      }
    }
