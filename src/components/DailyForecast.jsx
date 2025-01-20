import { Thermometer, Wind, Cloudy, Droplets } from 'lucide-react';

const DailyForecast = ({ data }) => {

    return (
        <>
            <div className="bg-green-200 border border-green-200 w-full px-2 sm:px-4 py-2 rounded shadow-md my-1.5 grid grid-cols-3 sm:place-items-center gap-y-2 text-xs">

                <h2 className='font-semibold text-sm sm:text-xl'>
                    {data.weekDayName}
                </h2>

                <div className='flex'>
                    <Thermometer className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgTemp}°K</h2>
                </div>

                <div className='flex'>
                    <Cloudy className='pr-1 size-5 sm:size-6' />
                    <h2>{data.avgWindSpeed}m/s</h2>
                </div>

                <div>
                    <img src="" alt="error" />
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