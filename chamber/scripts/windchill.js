const temperature = document.getElementById('temperature');
let newTemperature = 50;
temperature.innerHTML += newTemperature + `&deg;F`;

const speed = document.getElementById('speed');
let newSpeed = 4;
speed.innerHTML += newSpeed + ` km/h`;

function windchill(t, s) {
    let windChill = (35.74 + (0.6215 * t)) - ((35.75) * (s ** 0.16)) + ((0.4275 * t * (s ** 0.16)))
    return windChill;
}

const chill = document.getElementById('chill');
let windChill = windchill(newTemperature, newSpeed);
chill.innerHTML += windChill.toFixed() + `&deg;F`;