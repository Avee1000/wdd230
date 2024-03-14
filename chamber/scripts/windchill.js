// const temperature = document.getElementById('temperature');
// let newTemperature = 50;
// temperature.innerHTML += newTemperature + `&deg;F`;

// const speed = document.getElementById('speed');
// let newSpeed = 4;
// speed.innerHTML += newSpeed + ` km/h`;

// function windchill(t, s) {
//     let windChill = (35.74 + (0.6215 * t)) - ((35.75) * (s ** 0.16)) + ((0.4275 * t * (s ** 0.16)))
//     return windChill;
// }

// const chill = document.getElementById('chill');
// let windChill = windchill(newTemperature, newSpeed);
// chill.innerHTML += windChill.toFixed() + `&deg;F`;

const banner = document.getElementById("banner");

const currentTemp = document.getElementById('current-temp');

const currentDesc = document.getElementById('description');

const weatherIcon = document.getElementById('weather-icon');

const div = document.querySelector('#more-info');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.32691&lon=5.60750&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

    const desc = data.weather[0].description;

    currentDesc.innerHTML = `- ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    div.appendChild(humidity);

    const windSpeed = document.createElement('p');
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
    div.appendChild(windSpeed);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather");    
}

window.addEventListener("load", function () {

    let today = new Date();
    let day = today.getDay();
  
    if (day >= 1 && day <= 3) {

        const prompt = document.getElementById('prompt');
        prompt.setAttribute('class', 'prompt');
        prompt.style.position = "fixed";
        prompt.style.padding = "10px";
        prompt.style.transition = "1s";
    
        banner.style.display = "flex";

        document.querySelector('.class').addEventListener('click', function () { 

            banner.style.display = "none";

        });
    }

    // const button = document.createElement('button');
    // button.textContent = `❌`;
    // button.setAttribute('type', 'submit');
});