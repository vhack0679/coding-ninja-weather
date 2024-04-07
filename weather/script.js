// Define the getWeather function
async function getWeather(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const apiKey = "b85a616c33cb727538407f0dcb8ac212"; // Replace with your API key
    const location = document.getElementById("location-input").value.trim();

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather-data").innerText = "Error: City not found";
        } else {
            const cityName = data.name;
            document.getElementById("city-name").innerText = cityName;
            const weatherDetails = `City: ${cityName}, Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
            document.getElementById("weather-data").innerText = weatherDetails;
        }

        // Clear input field after form submission
        document.getElementById("location-input").value = '';
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather-data").innerText = "Error fetching weather data. Please try again later.";
    }
}

// Add event listener to the form to call getWeather function on form submission
document.getElementById("location-form").addEventListener("submit", getWeather);
