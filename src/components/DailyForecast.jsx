import { Thermometer, Wind, Cloudy, Droplets } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';

const DailyForecast = ({ data }) => {

    const {displayTempUnit} = useWeather();

    return (
        <>
            <div className="bg-green-200 border border-green-200 w-full px-2 sm:px-4 py-2 rounded shadow-md my-1.5 grid grid-cols-3 gap-y-2 text-xs">

                <h2 className='font-semibold text-sm sm:text-xl'>
                    {data.weekDayName}
                </h2>

                <div className='flex'>
                    <Thermometer className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgTemp}{displayTempUnit}</h2>
                </div>

                <div className='flex'>
                    <Wind className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgWindSpeed}m/s</h2>
                </div>

                <div className='flex items-center'>
                    <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                        alt="" 
                        className='size-6'
                    />
                    <p>{data.description}</p>

                </div>

                <div className='flex'>
                    <Cloudy className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgClouds}%</h2>
                </div>

                <div className='flex'>
                    <Droplets className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgHumidity}%</h2>
                </div>
            </div>
        </>
    );
}

export default DailyForecast;