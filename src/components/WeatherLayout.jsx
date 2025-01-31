import { useEffect, useState } from "react";
import SearchBar from './SearchBar'
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";
import WeeklyForecast from "./WeeklyForecast";
import { useWeather, WeatherContextProvider } from "../context/WeatherContext";

const WeatherLayout = () => {

    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastBaseUrl = `https://api.openweathermap.org/data/2.5/forecast`;
    const appId = import.meta.env.VITE_APP_ID;

    const { searchCity, isKelvin, setDisplayTempUnit } = useWeather();
    const [weatherData, setWeatherData] = useState({});
    const [weeklyForecastData, setWeeklyForecastData] = useState(null);
    const [hourlyForecastData, setHourlyForecastData] = useState([]);
    const [dailyForecastData, setDailyForecastData] = useState([]);

    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const response = await fetch(`${weatherBaseUrl}?q=${searchCity}&appid=${appId}&units=${isKelvin ? "" : "metric"}`);
                const weatherData = await response.json();
                setWeatherData(weatherData);
                // console.log(weatherData);
            }
            fetchWeather();
        } catch (error) {
            console.error("The error occured in fetching weather data: " + error);
        }

        try {
            const fetchForecastData = async () => {
                const response = await fetch(`${forecastBaseUrl}?q=${searchCity}&appid=${appId}&units=${isKelvin ? "" : "metric"}`);
                const forecastData = await response.json();
                setWeeklyForecastData(forecastData);
            }
            fetchForecastData();
        } catch (error) {
            console.error("The error occured in fetching forecast data: " + error);
        }

        // method for displaying the temperature units value and it updates whenever changes in isKelvin state means someone toggle the switch button.
        const changeTempDisplayUnit = () => {
            if (isKelvin)
                setDisplayTempUnit("°K");
            else
                setDisplayTempUnit("°C");
        }
        changeTempDisplayUnit();

    }, [searchCity, isKelvin]);

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
                setHourlyForecastData(requiredData);
            }
        }
        setTodayHourlyForecastData();

        const extractAvgDailyForecastData = (date) => {
            if (weeklyForecastData != null) {
                // const tomorrowDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];


                const filteredData = weeklyForecastData.list.filter(x => {
                    const recordDate = x.dt_txt.split(" ")[0];

                    // return !(currentDate == recordDate);
                    return recordDate == date;
                });

                const aggregatedData = filteredData.reduce((accumulator, record) => {

                    accumulator.temp += record.main.temp;
                    accumulator.clouds += record.clouds.all;
                    accumulator.windSpeed += record.wind.speed;
                    accumulator.humidity += record.main.humidity;
                    accumulator.icons.push(record.weather[0].icon);
                    accumulator.weatherDescriptions.push(record.weather[0].main);

                    return accumulator;
                }, { temp: 0, clouds: 0, windSpeed: 0, humidity: 0, icons: [], weatherDescriptions: [] });

                // Get the weekday name
                const weekday = new Date(date).toLocaleDateString("en-US", { weekday: "long" });


                return {
                    date: date,
                    weekDayName: weekday,
                    avgTemp: Math.round(aggregatedData.temp / filteredData.length),
                    avgClouds: Math.round(aggregatedData.clouds / filteredData.length),
                    avgWindSpeed: (aggregatedData.windSpeed / filteredData.length).toFixed(2),
                    avgHumidity: Math.round(aggregatedData.humidity / filteredData.length),
                    icon: aggregatedData.icons[Math.floor(Math.random() * aggregatedData.icons.length)], // just for selecting the random icon from array which is storing icon of hourly weather forecast.
                    description: aggregatedData.weatherDescriptions[Math.floor(Math.random() * aggregatedData.icons.length)] // same doing for this one
                }
            }
        }

        const currentDate = new Date().toISOString().split("T")[0];
        const distinctDtTxt = [
            ...new Set(weeklyForecastData?.list.map(item => item.dt_txt.split(" ")[0]))
        ]

        const upcomingDaysForecastInfo = distinctDtTxt
            .filter(date => date != currentDate)  // filter out the current date because I don't want to display current date weather forecase since we are displaying it on top and hourly wise too.
            .map(date => extractAvgDailyForecastData(date));

        setDailyForecastData(upcomingDaysForecastInfo);

    }, [weeklyForecastData])


    return (
        <>
            <SearchBar />
            <CurrentWeather data={weatherData} />
            <TodayForecast hourlyForecastData={hourlyForecastData} />
            <WeeklyForecast dailyForecastData={dailyForecastData} />
        </>
    )
}

export default WeatherLayout;