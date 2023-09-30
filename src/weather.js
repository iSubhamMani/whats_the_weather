export default class Weather{
    constructor(data){
        this.weatherCondition = data.current.condition.text;
        this.weatherConditionIcon = data.current.condition.icon;

        this.temp_c = data.current.temp_c;
        this.temp_f = data.current.temp_f;

        this.feelsLike_c = data.current.feelslike_c;
        this.feelsLike_f = data.current.feelslike_f;

        this.humidity = data.current.humidity;
        this.uv = data.current.uv;

        this.vis_km = data.current.vis_km;
        this.vis_miles = data.current.vis_miles;

        this.wind_dir = data.current.wind_dir;

        this.wind_kph = data.current.wind_kph;
        this.wind_mph = data.current.wind_mph;

        this.country = data.location.country;
        this.name = data.location.name;
        this.region = data.location.region;
        this.localTime = data.location.localtime.split(" ")[1];
        this.localDate = data.location.localtime.split(" ")[0];
    }
}