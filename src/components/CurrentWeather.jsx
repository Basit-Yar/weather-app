

const CurrentWeather = ({data}) => {

    return (
        <>
            <h1>Temperature: {data?.main?.temp}</h1>
            <h1>city: {data?.name}, {data?.sys?.country}</h1>
            <h1>Feels like: {data.main?.feels_like}</h1>
            <h1>Cloud: {data.clouds?.all}%</h1>
            <h1>Wind: {data.wind?.speed}</h1>
            <h1>Humidity: {data.main?.humidity}</h1>
            <h1>Pressure: {data.main?.pressure}</h1>
            <h1>icon: <img src={`https://openweathermap.org/img/wn/${data.weather && data.weather[0]?.icon}@2x.png`} alt="Weather Icon" /></h1>
            <h1>Weather description: {data.weather && data?.weather[0]?.description}</h1>
        </>
    )
}

export default CurrentWeather;