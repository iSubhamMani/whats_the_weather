// Return the weather data for a location
import getWeatherApiKey from './api_key';

export default async function fetchCurrentWeather(location){

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${getWeatherApiKey()}&q=${location}`, {
            mode: 'cors'
        });

        if(response.status === 400){
            throw new Error();
        }
        
        const responseJson = await response.json();
        return responseJson;
    }
    catch(e){
        console.log('Something went wrong..');
    }
}