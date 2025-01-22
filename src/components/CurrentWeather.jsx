import {ThermometerSunIcon, Wind, Cloudy, Droplets} from 'lucide-react'; 
import { useWeather } from '../context/WeatherContext';

const CurrentWeather = ({ data }) => {

    const { displayTempUnit } = useWeather();

    return (
        <>
            <div className="bg-green-100 py-2 px-4 sm:p-4 mx-3 sm:mx-16 my-4 rounded-md shadow-md">

                <div className="flex justify-between items-center">

                    <div className="">
                        <h2 className="font-semibold text-xl sm:text-2xl">
                            {data.name}, {data.sys?.country}
                        </h2>
                        <h1 className="font-bold text-2xl sm:text-4xl mt-2">
                            {Math.round(data.main?.temp)}{displayTempUnit}
                        </h1>
                        <p className="text-slate-400">
                            {data.weather && data.weather[0].main} 
                            <span className='text-xs sm:text-sm'>, {data.weather && data.weather[0].description}</span>
                        </p>
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${data.weather && data.weather[0]?.icon}@2x.png`} 
                             alt="weather_icon" 
                             className="sm:size-32 size-24"
                        />
                    </div>
                </div>

                <div className="flex justify-around text-xs sm:text-base my-3">
                    <div className='flex flex-col items-center'>
                        <p className="text-slate-400">
                            <ThermometerSunIcon className='inline-block pr-1 size-4 sm:size-6'/>
                            Real Feel
                        </p>
                        <p className='font-bold'>{Math.round(data.main?.feels_like)}{displayTempUnit}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="text-slate-400">
                            <Wind className='inline-block pr-1 size-4 sm:size-6'/>
                            Wind
                        </p>
                        <p className='font-bold'>{data.wind?.speed}m/s</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="text-slate-400">
                            <Cloudy className='inline-block pr-1 size-4 sm:size-6'/>
                            Clouds
                        </p>
                        <p className='font-bold'>{data.clouds?.all}%</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="text-slate-400">
                            <Droplets className='inline-block pr-1 size-4 sm:size-6'/>
                            Humidity
                        </p>
                        <p className='font-bold'>{data.main?.humidity}%</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CurrentWeather;