function updateClock() {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const offset = -3;
      const local = new Date(utc + 3600000 * offset);

      const time = local.toLocaleTimeString('pt-BR', { hour12: false });
      const date = local.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

	 

	const onlyHour = local.toLocaleTimeString('pt-BR', { hour12: false }).split(':')[0];

	let greeting_image = "";
	
	if (onlyHour < 12) {
        greeting = "Bom dia!";
	greeting_image ="assets/images/good_morning.png";
      } else if (onlyHour < 18) {
        greeting = "Boa tarde!";
	greeting_image ="assets/images/pikachu.png";	
      } else {
        greeting = "Boa noite!";		
      }	 
	 
      document.getElementById('greeting').textContent = greeting;
      document.getElementById('clock').textContent = time;
      document.getElementById('date').textContent = date;	
      document.getElementById('greetingImage').src = greeting_image;
    }

    function toggleTheme() {
      const body = document.body;
      const iconMoon = document.getElementById('icon-moon');
      const iconSun = document.getElementById('icon-sun');

      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        iconMoon.style.display = 'none';
        iconSun.style.display = 'inline';
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        iconMoon.style.display = 'inline';
        iconSun.style.display = 'none';
      }
    }

    setInterval(updateClock, 1000);
    updateClock();	
