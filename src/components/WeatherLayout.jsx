import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";

const WeatherLayout = () => {

    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast`;
    const appId = import.meta.env.VITE_APP_ID;

    const [city, setCity] = useState("Bhopal"); // we will change the code for city.
    const [weatherData, setWeatherData] = useState({});
    const [weeklyForecastData, setWeeklyForecastData] = useState(null);
    const [todayWeatherForecastData, setTodayWeatherForecastData] = useState([]);

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
            console.error("The error occured in fetching weather data: " + error);
        }

        try {
            const fetchForecastData = async () => {
                const response = await fetch(`${forecastBaseUrl}?q=${city}&appid=${appId}`);
                const forecastData = await response.json();
                setWeeklyForecastData(forecastData);
            }
            fetchForecastData();
        } catch (error) {
            console.error("The error occured in fetching forecast data: " + error);
        }

    }, []);

    useEffect(() => {

        const setTodayHourlyForecastData = () => {
            if (weeklyForecastData != null) {
                let requiredData = weeklyForecastData.list.filter(x => {
                    const currentDate = new Date().toISOString().split("T")[0];
                    let recordDate = x.dt_txt.split(" ")[0];
                    return currentDate == recordDate;
                });
                // console.log("requiredData: ");
                // console.log(requiredData);
                setTodayWeatherForecastData(requiredData);
            }
        }
        setTodayHourlyForecastData();

    }, [weeklyForecastData])


    return (
        <>
            <CurrentWeather data={weatherData} />
            <TodayForecast todayWeatherForecastData={todayWeatherForecastData} />
        </>
    )
}

export default WeatherLayout;