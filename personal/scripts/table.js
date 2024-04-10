const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.50790&lon=-86.94813&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
            displayForecast(data.rentals);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}