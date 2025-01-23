import { Search } from 'lucide-react'
import { useWeather } from '../context/WeatherContext';
import { useEffect, useState } from 'react';

const SearchBar = () => {

    const cityBaseUrl = `https://api.openweathermap.org/geo/1.0/direct`;
    const appId = import.meta.env.VITE_APP_ID;
    const { isKelvin, setIsKelvin } = useWeather();
    const [search, setSearch] = useState("");
    const [searchCitiesInfo, setSearchCitiesInfo] = useState([]);

    const toggleSwitch = () => setIsKelvin(prev => !prev);

    // const changeSearchCity = () => {

    useEffect(() => {

        try {
            const fetchCityInfo = async () => {
                const request = await fetch(`${cityBaseUrl}?q=${search}&limit=${4}&appid=${appId}`);
                const response = await request.json();
                const reqiredCities = response.map(cityInfo => {
                    return {
                        cityName: cityInfo.name,
                        state: cityInfo.state,
                        country: cityInfo.country
                    };
                })
                setSearchCitiesInfo(reqiredCities);
            }
            fetchCityInfo();

        } catch (error) {
            console.log("error occured while fetching city info: " + error);
        }

    }, [search])

    // }

    return (
        <>
            <div className="flex justify-between items-center p-3 sm:p-4 mx-3 sm:mx-16 my-4 rounded-md bg-green-100 shadow-md">
                <div className='md:w-2/5 w-4/6 relative border-0 border-red-600'>
                    <input
                        placeholder="Search for a city..."
                        className="w-full outline-none focus:border-green-700 focus:border-2 p-2 rounded-md"
                        // value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search className='absolute top-2.5 right-2.5 text-gray-400' />
                    <div className='p-2 mt-1 absolute left-0 w-full bg-white rounded-md shadow-lg z-10'>
                        {searchCitiesInfo.map(x => {
                            return (
                                <p className='px-2 py-1 hover:bg-green-200 rounded'>
                                    {x.cityName}, {x.country}
                                </p>
                            );
                        })}
                    </div>
                </div>
                {/* <div className='w-fit border border-green-700 rounded-md py-1 px-3 bg-white'>
                    Units
                </div> */}
                <div className='sm:w-24 w-16 h-6 sm:h-9 bg-white rounded-3xl flex justify-around items-center relative border border-green-300 sm:text-base text-xs cursor-pointer'
                    onClick={toggleSwitch}
                >
                    <span className='z-10'>°C</span>
                    <span className='z-10'>°K</span>
                    <div className={`sm:w-10 w-7 sm:h-6 h-4 bg-green-300 rounded-2xl absolute shadow-xl ${isKelvin ? 'left-1/2' : 'right-1/2'}`}></div>
                    {/* <div className={`sm:w-10 w-7 sm:h-6 h-4 bg-green-300 rounded-2xl absolute shadow-xl transform transition-transform duration-500 ease-in-out ${isKelvin ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div> */}
                </div>
            </div>
        </>
    )
}

export default SearchBar;
