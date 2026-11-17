// task-7

let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
let status1 = document.querySelector("#status")

let weather = document.querySelector("#weather")
let cityName = document.querySelector("#cityName")
let temp = document.querySelector("#temp")
let coord = document.querySelector("#coord")
let resetbtn = document.querySelector("#resetbtn")

btn.addEventListener("click", async() => {

    const cityValue = inp.value.trim();
    if(cityValue === "") {
        status1.textcontent = "please enter a city name!!";
        return;
    }
    try {
        status1.textContent = "Loading...";
        cityName.textContent = "";
        temp.textContent = "";
        coord.textContent = "";

        // get latitude and longitude
        const url = "https://geocoding-api.open-meteo.com/v1/search?name=" + cityValue + "&count=1&language=en&format=json";
        const geoRes = await fetch(url)

        const geoData = await geoRes.json();

        if(!geoData.results || geoData.results.length === 0) {
            throw new Error ("City not found!");
            Error.style.color = "red";
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

        const foundCity = geoData.results[0].name;
        const country = geoData.results[0].country;

        // get weather using coordinate

        const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude="
                    + latitude
                    + "&longitude="
                    + longitude
                    + "&current=temperature_2m";

        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
            throw new Error("Weather API failed!");
            Error.style.color = "red"
        }
        const weatherData = await weatherResponse.json();

        console.log(weatherData);

        // to display weather 
        cityName.textContent = `${foundCity}, ${country}`;

        temp.textContent = `${weatherData.current.temperature_2m}°C`;

        coord.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        status1.textContent = "Weather loaded succesfully!!"
        status1.style.color = "skyblue"
    }
    catch (error) {
        status1.textContent = "Error: " + error.message;
        status1.style.color = "red";
        console.log(error);
    }
})
resetbtn.addEventListener("click", () => {
        cityName.textContent = "";
        temp.textContent = "";
        coord.textContent = "";
        status1.textContent = "";

        inp.value = "";
})

// task-8


// task-8

let inp1 = document.querySelector("#inp1")
let btn1 = document.querySelector("#btn1")
let status2 = document.querySelector("#status1")

let weather1 = document.querySelector("#weather1")
let cityName1 = document.querySelector("#cityName1")
let temp1 = document.querySelector("#temp1")
let coord1 = document.querySelector("#coord1")
let resetbtn1 = document.querySelector("#resetbtn1")

let timer;

inp1.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        btn1.click();

    }, 500);

});
btn1.addEventListener("click", async() => {

    const cityValue = inp1.value.trim();

    if(cityValue === "") {
        status2.textContent = "Please enter a city name!!";
        return;
    }

    try {
        status2.textContent = "Loading...";
        cityName1.textContent = "";
        temp1.textContent = "";
        coord1.textContent = "";

        // Get latitude and longitude
        const url = "https://geocoding-api.open-meteo.com/v1/search?name="
                    + cityValue
                    + "&count=1&language=en&format=json";

        const geoRes = await fetch(url);
        const geoData = await geoRes.json();

        if(!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found!");
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

        const foundCity = geoData.results[0].name;
        const country = geoData.results[0].country;

        // Get weather using coordinates
        const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude="
                    + latitude
                    + "&longitude="
                    + longitude
                    + "&current=temperature_2m";

        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
            throw new Error("Weather API failed!");
        }

        const weatherData = await weatherResponse.json();

        console.log(weatherData);

        // Display weather
        cityName1.textContent = `${foundCity}, ${country}`;
        temp1.textContent = `${weatherData.current.temperature_2m}°C`;
        coord1.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        status2.textContent = "Weather loaded successfully!!";
        status2.style.color = "skyblue";
    }

    catch (error) {
        status2.textContent = "Error: " + error.message;
        status2.style.color = "red";
        console.log(error);
    }
});

resetbtn1.addEventListener("click", () => {

    cityName1.textContent = "";
    temp1.textContent = "";
    coord1.textContent = "";
    status2.textContent = "";

    inp1.value = "";
});
