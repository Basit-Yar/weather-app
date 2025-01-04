import react from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {

    return (
        <>
            <div className='h-16 shadow-md flex justify-between md:px-16 items-center'>
                <div id='logo'>
                    <h1 className='text-2xl font-extrabold text-violet-700'>
                        WeatherForecast
                    </h1>
                </div>
                <div id='theme-mode'
                    className='flex items-end text-violet-700 font-semibold'
                >
                    <span className='text-lg'>Theme</span>
                    <ChevronDown size={24} />
                </div>
            </div>
        </>
    )
}

export default Header;