async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        result.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${data.current_condition[0].temp_C} °C</p>
            <p>Humidity: ${data.current_condition[0].humidity}%</p>
            <p>Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
            <p>Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
        `;
    } catch (error) {
        result.innerHTML = "Unable to fetch weather data.";
    }
}
