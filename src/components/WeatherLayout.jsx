import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

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
            <CurrentWeather data={weatherData} />
        </>
    )
}

export default WeatherLayout;