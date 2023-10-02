import addInfoUI from "./create_info_ui";
import fetchCurrentWeather from "./fetch_current_weather";
import Weather from "./weather";

export default function setUpSearchForm(){
    const submitBtn = document.querySelector('.search-btn');
    const searchField = document.getElementById('search-field');

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const searchQuery = searchField.value;

        const response = await fetchCurrentWeather(`${searchQuery}`);
        if(response){
            const data = new Weather(response);
            console.log(data);
            addInfoUI(data);
        }
    })
}