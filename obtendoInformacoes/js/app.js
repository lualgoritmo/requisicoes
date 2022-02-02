
    const cityForm = document.querySelector('[ data-js="change-location"]');
    const cityNameContainer = document.querySelector('[data-js="city-name" ]')
    const cityWeatherContainer = document.querySelector('[data-js="city-wearther" ]');
    const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
    const cityCard = document.querySelector('[data-js="city-card"]');
    let timeImg = document.querySelector('[data-js="time"]');
    let timeIconContainer = document.querySelector('[data-js="time-icon"]');

          cityForm.addEventListener('submit', async event => 
          {
              event.preventDefault();
            
              const inputValue = event.target.city.value;
              const [{Key, LocalizedName}] = await getCityData(inputValue);
              const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWearther(Key);
              const timeIcon = `<img src="./src/icons/${WeatherIcon}"`;

              if(cityCard.classList.contains='d-none')
              {
                  cityCard.classList.remove('d-none');
              }

              if(IsDayTime)
              {
                  timeImg.src = './src/sol.jpg';
              }
              else
              {
                 timeImg.src = './src/noite.jpg';
              }

              timeIconContainer.innerHTML = timeIcon;
              cityNameContainer.textContent = LocalizedName;
              cityWeatherContainer.textContent = WeatherText;
              cityTemperatureContainer.textContent = Temperature.Metric.Value;

              cityForm.reset();
          });