import { useState, useEffect } from "react";

const HourlyForecast = (props) => {

    return (
        <div className="mx-0.5 mt-5 border border-green-300 bg-green-200 p-2 min-h-36 w-28 shadow-md">
            <h3 className="text-center">{props.time}</h3>

            {/* <img className="border border-red-700" src="https://raw.githubusercontent.com/aminawinti/the-weather-forecasting/refs/heads/main/src/assets/icons/01d.png" alt="err" />
            <p className="text-center">Degree</p> */}

            <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
        </div>
    )
}

const TodayForecast = () => {

    const [todayWeatherForecastData, setTodayWeatherForecastDate] = useState([]);

    useEffect(() => {
        const todayHourlyWeatherInfo = () => {

            fetch("https://api.openweathermap.org/data/2.5/forecast?q=bhopal&appid=66ec6d9193d441b0fe920565f19f4442")
                .then(response => response.json())
                .then(data => {
                    const requiredData = data.list.filter(x => {
                        let currentDate = new Date().toISOString().split("T")[0];
                        let recordDate = x.dt_txt.split(" ")[0];
                        return currentDate == recordDate;
                    });
                    setTodayWeatherForecastDate(requiredData);
                })
                .catch(error => {
                    console.log("error occured: " + error);
                })
        }
        todayHourlyWeatherInfo();

    }, []);
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

                {
                    todayWeatherForecastData.map((hourlyData, index) =>
                        <HourlyForecast
                            key={index}
                            time={hourlyData.dt_txt.split(" ")[1].slice(0, 5)}
                            icon={hourlyData.weather[0].icon}
                        />
                    )
                }

            </div>
        </>
    );
}

export default TodayForecast;