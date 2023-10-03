import addInfoUI from "./create_info_ui";
import fetchCurrentWeather from "./fetch_current_weather";
import Weather from "./weather";

export default function setUpSearchForm(){
    const submitBtn = document.querySelector('.search-btn');
    const searchField = document.getElementById('search-field');
    const ripple = document.querySelector('.lds-ripple');
    const weatherInfo = document.getElementById('weather-info');

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const searchQuery = searchField.value;

        if(searchQuery.trim() !== ""){
            weatherInfo.textContent = "";
            ripple.style.display = 'inline-block';
            
            const response = await fetchCurrentWeather(`${searchQuery}`);
            if(response){
                ripple.style.display = 'none';
                const data = new Weather(response);
                console.log(data);
                addInfoUI(data);
            }
        }
    })
}