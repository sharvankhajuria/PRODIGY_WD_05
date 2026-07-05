const apiKey = "89cefbdc10313cb4dea26a10f677853c";

async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("condition").innerHTML = data.weather[0].main;
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        alert("Failed to fetch weather data");
        console.error(error);
    }
}