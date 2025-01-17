
const HourlyForecast = (props) => {

    return (
        <div className="mx-0.5 mt-5 border border-green-300 bg-green-200 p-2 w-24 shadow-md rounded-md">
            <h3 className="text-center text-sm">{props.time}</h3>

            {/* <img className="border border-red-700" src="https://raw.githubusercontent.com/aminawinti/the-weather-forecasting/refs/heads/main/src/assets/icons/01d.png" alt="err" /> */}

            <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
            <h2 className="text-center font-bold">{props.temp}°K</h2>
        </div>
    )
}

export default HourlyForecast;