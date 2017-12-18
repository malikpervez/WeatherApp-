const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEMP = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip){
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}
// aynchrnous function for api call.
function fetchForecast(zip) {
    return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => {
        return {
            main: responseJSON.weather[0].main,
            description: responseJSON[0].description,
            temp: responseJSON.main.temp
        };
    })
    .catch(error => {
        console.log(error)
    });
}

export default { fetchForecast: fetchForecast };