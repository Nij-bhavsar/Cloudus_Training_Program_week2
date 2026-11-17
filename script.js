const form = document.querySelector("#searchForm");
const cityInput = document.querySelector("#cityInput");
const status = document.querySelector("#status");
const result = document.querySelector("#result");

const searchList = document.querySelector("#searchList")
const recentSearches = document.querySelector("#recentSearches")
const reset = document.querySelector("#rst")

async function getWeather(city) {
    status.textContent = "Loading...";
    result.innerHTML = "";

    try {
        // 1) City to location
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        const geoData = await geoRes.json();

        if (!geoData.results) {
            throw new Error("City not found");
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2) Location to weather
        const wRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const wData = await wRes.json();
        const w = wData.current_weather;

        status.textContent = "";

        showWeather(name, country, w);

        // Remember the last searched city
        localStorage.setItem("lastCity", city);

        saveSearch(name);

    } catch (err) {
        status.textContent = "Error: " + err.message;
    }
}

// Your job: Improve this function (make a nice card)
function showWeather(name, country, w) {
    
    let tempclass = "";

    if(w.temperature > 30){
        tempclass = "hot";
    }
    else if (w.temperature < 20){
        tempclass = "cold";
    }
    else {
        tempclass = "normal";
    }

    result.innerHTML = `
        <div class="card">
            <h2>${name}, ${country}</h2>

            <p class="temp">${w.temperature} °C</p>

            <p>Wind: ${w.windspeed} km/h</p>
        </div>
    `;
}

// save last 5 searches
function saveSearch(city) {

    // get searches from localstorage
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

    // remove duplicate city
    searches = searches.filter(item => item.toLowerCase() !== city.toLowerCase)

    // add the latest city at the start
    searches.unshift(city);

    // keep only last 5 searches
    searches = searches.slice(0, 5);

    // save array in localstorage
    localStorage.setItem("recentSearches", JSON.stringify(searches));

    displaySearches(searches);
}

// recent searches fucntion

function displaySearches(searches) {
    searchList.innerHTML = "";
    searches.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;
        searchList.appendChild(li);
    });
}
// Form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});

// load previous searches

let oldSearches = [];
const savedSearches = localStorage.getItem("recentSearches");

if(savedSearches) {
    try{
        oldSearches = JSON.parse(savedSearches);
    }
    catch (error) {
        oldSearches = [];
        localStorage.removeItem("recentSearches");
    }
}
displaySearches(oldSearches);

// Show the last city when the page opens
const last = localStorage.getItem("lastCity");

if (last) {
    cityInput.value = last;
    getWeather(last);
}

reset.addEventListener("click", () => {

    cityInput.value = "";
});