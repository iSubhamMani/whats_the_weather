import formatDate from "./dateFormatter";

function getInfoUI(data){
    const infoContainer = document.createElement('div');
    infoContainer.id = "weather-info-container";

    // Info Section Left

    const infoSectionLeft = document.createElement('div');
    infoSectionLeft.className = "info-section-left";

    const headerLeft = document.createElement('div');
    headerLeft.className = "header-left";

    const name = document.createElement('span');
    name.className = "name";
    name.textContent = `${data.name}, ${data.country}`;

    const localDate = document.createElement('span');
    localDate.className = "local-date";
    localDate.textContent = formatDate(data.localDate);

    headerLeft.appendChild(name);
    headerLeft.appendChild(localDate);

    const weatherCondContainer = document.createElement('div');
    weatherCondContainer.className = "weather-cond-container";

    const tempText = document.createElement('span');
    tempText.className = "temp-txt";
    tempText.textContent = `${data.temp_c}°C`;

    const weatherCondText = document.createElement('span');
    weatherCondText.className = "weather-cond-txt";
    weatherCondText.textContent = `${data.weatherCondition}`;

    const cc1 = document.createElement('div');
    cc1.className = 'cc-1';

    cc1.appendChild(tempText);
    cc1.appendChild(weatherCondText);

    const cc2 = document.createElement('div');
    cc2.className = 'cc-2';

    const humidity = document.createElement('span');
    humidity.className = 'humidity-txt';
    humidity.textContent = `${data.humidity}%`;

    const windSpeed = document.createElement('span');
    windSpeed.className = 'wind-speed-txt';
    windSpeed.textContent = `${data.wind_kph} kph`;

    cc2.appendChild(humidity);
    cc2.appendChild(windSpeed);

    weatherCondContainer.appendChild(cc1);
    weatherCondContainer.appendChild(cc2);

    infoSectionLeft.appendChild(headerLeft);
    infoSectionLeft.appendChild(weatherCondContainer);

    // Info Section Right

    const infoSectionRight = document.createElement('div');
    infoSectionRight.className = "info-section-right";

    const localTime = document.createElement('span');
    localTime.className = 'local-time';

    if(data.localTime.split(':')[0] >= 0 && data.localTime.split(':')[0] < 12){
        localTime.textContent = `${data.localTime} A.M`;
    }
    else if(data.localTime.split(':')[0] >= 12 && data.localTime.split(':')[0] < 13){
        localTime.textContent = `${data.localTime} P.M`;
    }
    else{
        localTime.textContent = `${(data.localTime.split(':')[0] - 12)}:${data.localTime.split(':')[1]} P.M`;
    }

    const feelsLikeText = document.createElement('span');
    feelsLikeText.className = 'feels-like-txt';
    feelsLikeText.textContent = `Feels like ${data.feelsLike_c}°C`

    const uvIndex = document.createElement('span');
    uvIndex.className = 'uv-index';
    uvIndex.textContent = `UV index: ${data.uv}`;

    const windDir = document.createElement('span');
    windDir.className = 'wind-dir';
    windDir.textContent = `Wind direction: ${data.wind_dir}`;

    infoSectionRight.appendChild(localTime);
    infoSectionRight.appendChild(feelsLikeText);
    infoSectionRight.appendChild(uvIndex);
    infoSectionRight.appendChild(windDir);

    infoContainer.appendChild(infoSectionLeft);
    infoContainer.appendChild(infoSectionRight);

    return infoContainer;
}

export default function addInfoUI(data){
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.textContent = "";
    weatherInfo.appendChild(getInfoUI(data));
}