import { Search } from 'lucide-react'
import { useState } from 'react';

const SearchBar = () => {

    const [isKelvin, setIsKelvin] = useState(true);
    
    const toggleSwitch = () => setIsKelvin(prev => !prev);

    return (
        <>
            <div className="flex justify-between items-center p-3 sm:p-4 mx-3 sm:mx-16 my-4 rounded-md bg-green-100 shadow-md">
                <div className='md:w-2/5 w-4/6 relative border-0 border-red-600'>
                    <input
                        placeholder="Search for a city..."
                        className="w-full outline-none focus:border-green-700 focus:border-2 p-2 rounded-md"
                    />
                    <Search className='absolute top-2.5 right-2.5 text-gray-400' />
                </div>
                {/* <div className='w-fit border border-green-700 rounded-md py-1 px-3 bg-white'>
                    Units
                </div> */}
                <div className='sm:w-24 w-16 h-6 sm:h-9 bg-white rounded-3xl flex justify-around items-center relative border border-green-300 sm:text-base text-xs cursor-pointer'
                    onClick={toggleSwitch}
                >
                    <span className='z-10'>°C</span>
                    <span className='z-10'>°K</span>
                    <div className={`sm:w-10 w-7 sm:h-6 h-4 bg-green-300 rounded-2xl absolute shadow-xl ${isKelvin ? 'right-1/2' : 'left-1/2'}`}></div>
                    {/* <div className={`sm:w-10 w-7 sm:h-6 h-4 bg-green-300 rounded-2xl absolute shadow-xl transform transition-transform duration-500 ease-in-out ${isKelvin ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div> */}
                </div>
            </div>
        </>
    )
}

export default SearchBar;
