function getWeather() {
    const apiKey = "390960f2bce71a809b0c7c56d13b44ca";
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    if (cityInput.value.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please enter a valid city name.");
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const resultHTML = `<p>Temperature: ${temperature} &#8451;</p>
                            <p>Description: ${description}</p>`;

                weatherInfo.innerHTML = resultHTML;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred while fetching weather data. Please try again.");
        });
}

function getPastWeather() {
    const apiKey = "390960f2bce71a809b0c7c56d13b44ca"; // Replace with your actual API key
    const cityInput = document.getElementById("cityInput");
    const dateInput = document.getElementById("dateInput");
    const pastWeatherInfo = document.getElementById("pastWeatherInfo");

    if (cityInput.value.trim() === "" || dateInput.value === "") {
        alert("Please enter a city and select a date.");
        return;
    }

    const apiUrl = `https://api.example.com/past-weather?city=${cityInput.value}&date=${dateInput.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("Past weather data not found for the selected date. Please try another date.");
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const resultHTML = `<p>Past Temperature: ${temperature} &#8451;</p>
                            <p>Description: ${description}</p>`;

                weatherInfo.innerHTML = resultHTML;
            }
        })
        .catch(error => {
            console.error("Error fetching past weather data:", error);
            alert("An error occurred while fetching past weather data. Please try again.");
        });
}
