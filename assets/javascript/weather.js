const url = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,weathercode&timezone=Asia%2FTokyo";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("temperature").textContent = "Temperature: " + data.current.temperature_2m + " °C";
        document.getElementById("weathercode").textContent = "Weather Code: " + data.current.weathercode;        
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
