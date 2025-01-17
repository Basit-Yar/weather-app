import { useState, useEffect } from "react";
import HourlyForecast from "./HourlyForecast";

const TodayForecast = () => {

    // const [todayWeatherForecastData, setTodayWeatherForecastDate] = useState([]);

    // useEffect(() => {
    //     const todayHourlyWeatherInfo = () => {

    //         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=bhopal&appid=${import.meta.env.VITE_APP_ID}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 const requiredData = data.list.filter(x => {
    //                     let currentDate = new Date().toISOString().split("T")[0];
    //                     // let currentDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]; // tomorrowDate
    //                     let recordDate = x.dt_txt.split(" ")[0];
    //                     return currentDate == recordDate;
    //                 });
    //                 setTodayWeatherForecastDate(requiredData);
    //             })
    //             .catch(error => {
    //                 console.log("error occured: " + error);
    //             })
    //     }
    //     todayHourlyWeatherInfo();

    // }, []);
    // console.log(todayWeatherForecastData);

    return (
        <>
            <div className="bg-green-100 py-2 px-4 sm:p-4 mx-3 sm:mx-16 my-4 rounded-md shadow-md">

                <h2 className="text-center text-xl font-semibold">
                    TODAY'S FORECAST
                </h2>
                <h4 className="text-center text-xs sm:text-sm font-normal text-slate-400">
                    {todayWeatherForecastData.length} available forecasts
                </h4>

                <div className={`flex ${todayWeatherForecastData.length < 3 ? "justify-center": "sm:justify-center"} items-center overflow-x-auto py-2`}>
                    {
                        todayWeatherForecastData.map((hourlyData, index) =>
                            <HourlyForecast
                                key={index}
                                time={hourlyData.dt_txt.split(" ")[1].slice(0, 5)}
                                icon={hourlyData.weather[0].icon}
                                temp={Math.round(hourlyData.main.temp)}
                            />
                        )
                    }
                </div>

            </div>
        </>
    );
}

export default TodayForecast;