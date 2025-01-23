import { Search } from 'lucide-react'
import { useWeather } from '../context/WeatherContext';
import { useEffect, useState } from 'react';

const CITY_BASE_URL = `https://api.openweathermap.org/geo/1.0/direct`;
const SUGGESTION_LIMIT = 4;

const SearchBar = () => {

    const { isKelvin, setIsKelvin, setSearchCity } = useWeather();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestedCities, setSuggestedCities] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const appId = import.meta.env.VITE_APP_ID;

    const handleToggleUnits = () => {
        setIsKelvin((prev) => !prev);
    };

    const handleCitySelection = (city) => {
        console.log("clicked on city: " + city);
        setSearchQuery(city);
        setSearchCity(city);
        // close the dropdown
        setIsDropdownOpen(false);
    }

    useEffect(() => {

        const fetchCitySuggestions = async () => {
            // if (searchQuery.trim().length == 0)
            //     return;
            if (!searchQuery.trim()) {
                setSuggestedCities([]);
                return;
            }

            try {

                const request = await fetch(
                    `${CITY_BASE_URL}?q=${searchQuery}&limit=${SUGGESTION_LIMIT}&appid=${appId}`
                );
                /**
                 * Todo: if response is not ok.
                 */
                // if (!response.ok) {
                //     throw new Error(`Failed to fetch city suggestions: ${response.statusText}`);
                // }
                const response = await request.json();
                const formattedCities = response.map(city => {
                    return {
                        cityName: city.name,
                        state: city.state,
                        country: city.country
                    };
                })
                setSuggestedCities(formattedCities);

            } catch (error) {
                console.error("Error fetching city suggestions:", error);
            }
        }

        const debounceTimeout = setTimeout(fetchCitySuggestions, 500);
        return () => clearTimeout(debounceTimeout);

    }, [searchQuery])

    return (
        <>
            <div className="flex justify-between items-center p-3 sm:p-4 mx-3 sm:mx-16 my-4 rounded-md bg-green-100 shadow-md">
                <div className='md:w-2/5 w-4/6 relative border-0 border-red-600'>
                    <input
                        placeholder="Search for a city..."
                        className="w-full outline-none focus:border-green-700 focus:border-2 p-2 rounded-md"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setIsDropdownOpen(true) }}
                    />
                    <Search className='absolute top-2.5 right-2.5 text-gray-400' />
                    {isDropdownOpen && searchQuery.trim().length > 2
                        &&
                        <div className='p-2 mt-1 absolute left-0 w-full bg-white rounded-md shadow-lg z-10'>
                            {suggestedCities.map(x => {
                                return (
                                    <p className='px-2 py-1 hover:bg-green-200 rounded cursor-pointer'
                                        onClick={() => handleCitySelection(x.cityName)}
                                    >
                                        {x.cityName}, {x.country}
                                    </p>
                                );
                            })}
                        </div>
                    }
                </div>

                <div className='sm:w-24 w-16 h-6 sm:h-9 bg-white rounded-3xl flex justify-around items-center relative border border-green-300 sm:text-base text-xs cursor-pointer'
                    onClick={handleToggleUnits}
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
