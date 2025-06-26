    async function getWeather() {
      if (!navigator.geolocation) {
        document.getElementById('weather').innerText = 'Geolocation is not supported by your browser.';
        return;
      }

      lon = position.coords.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          const temp = data.current.temperature_2m;
          const code = data.current.weathercode;

          document.getElementById('weather').innerHTML = `
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Weather Code:</strong> ${code}</p>
          `;
        } catch (error) {
          document.getElementById('weather').innerText = 'Failed to fetch weather data.';
        }
      }, () => {
        document.getElementById('weather').innerText = 'Unable to retrieve your location.';
      });
    }
