import { useEffect, useState } from "react";

const WeatherLayout = () => {

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const appId = import.meta.env.VITE_APP_ID;
    const city = 'bhopal';

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const response = await fetch(`${baseUrl}?q=${city}&appid=${appId}`);
                const weatherData = await response.json();
                setWeatherData(weatherData);
                console.log(weatherData);
            }
            fetchWeather();
        } catch (error) {
            console.error("The error is: " + error);
        }
    }, []);

    return (
        <>
            <h1>Temperature: {weatherData.main?.temp}</h1>
            <h1>city: {weatherData.name}, {weatherData.sys?.country}</h1>
            <h1>Feels like: {weatherData.main?.feels_like}</h1>
            <h1>Cloud: {weatherData.clouds?.all}%</h1>
            <h1>Wind: {weatherData.wind?.speed}</h1>
            <h1>Humidity: {weatherData.main?.humidity}</h1>
            <h1>Pressure: {weatherData.main?.pressure}</h1>
            <h1>icon: <img src={`https://openweathermap.org/img/wn/${weatherData.weather && weatherData.weather[0]?.icon}@2x.png`} alt="Weather Icon" /></h1>
            <h1>Weather description: {weatherData.weather && weatherData?.weather[0]?.description}</h1>
        </>
    )
}

export default WeatherLayout;