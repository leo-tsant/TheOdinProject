const displayWeather = (weatherData) => {
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = "";

    const location = document.createElement("h2");
    location.innerText = `${weatherData.name}, ${weatherData.region}, ${weatherData.country}`;
    weatherContainer.appendChild(location);

    const time = document.createElement("h3");
    time.innerText = `Local time: ${weatherData.localtime}`;
    weatherContainer.appendChild(time);

    const temp = document.createElement("h3");
    temp.innerText = `Temperature: ${weatherData.temp_c}°C / ${weatherData.temp_f}°F`;
    weatherContainer.appendChild(temp);

    const feelsLike = document.createElement("h3");
    feelsLike.innerText = `Feels like: ${weatherData.feelslike_c}°C / ${weatherData.feelslike_f}°F`;
    weatherContainer.appendChild(feelsLike);

    const wind = document.createElement("h3");
    wind.innerText = `Wind: ${weatherData.wind_kph} kph / ${weatherData.wind_mph} mph`;
    weatherContainer.appendChild(wind);

    const humidity = document.createElement("h3");
    humidity.innerText = `Humidity: ${weatherData.humidity}%`;
    weatherContainer.appendChild(humidity);

    const condition = document.createElement("h3");
    condition.innerText = `Condition: ${weatherData.condition.text}`;
    weatherContainer.appendChild(condition);
};

export default displayWeather;
