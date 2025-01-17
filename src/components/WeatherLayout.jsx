import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";

const WeatherLayout = () => {

    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast`;
    const appId = import.meta.env.VITE_APP_ID;

    const [city, setCity] = useState("Bhopal");
    const [weatherData, setWeatherData] = useState({});
    const [weeklyForecastData, setWeeklyForecastData] = useState({});
    const [todayWeatherForecastData, setTodayWeatherForecastDate] = useState([]);

    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const response = await fetch(`${weatherBaseUrl}?q=${city}&appid=${appId}`);
                const weatherData = await response.json();
                setWeatherData(weatherData);
                console.log(weatherData);
            }
            fetchWeather();
        } catch (error) {
            console.error("The error is: " + error);
        }

        try {
            const fetchForecastData = async() => {
                const response = await fetch(`${forecastBaseUrl}?q=${city}&appid=${appId}`);
                const forecastData = await response.json();
                setWeeklyForecastData(forecastData);
            }
            fetchForecastData();
        } catch (error) {
            console.error("The error occured in fetching forecast data: " + error);
        }

    }, []);

    return (
        <>
            <CurrentWeather data={weatherData} />
            <TodayForecast />
        </>
    )
}

export default WeatherLayout;