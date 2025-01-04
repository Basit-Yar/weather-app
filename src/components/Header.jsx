import react, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import ThemeBoxSetting from './ThemeBoxSetting';

const Header = () => {

    const [isThemeSettingOpen, setThemeSettingOpen] = useState(false);

    const toggleThemeSetting = () => {
        setThemeSettingOpen(prev => !prev);
    }

    return (
        <>
            <div className='h-14 shadow-md flex justify-between sm:px-16 items-center'>
                <div id='logo'>
                    <h1 className='text-2xl font-extrabold text-violet-700'>
                        WeatherForecast
                    </h1>
                </div>
                <div id='theme-mode'
                    className='relative flex items-end text-violet-700 font-semibold border-violet-700 px-2 rounded-md gap-1'
                    style={{ border: `1px solid` }}
                    onClick={toggleThemeSetting}
                >
                    <span className='sm:text-lg'>Theme</span>
                    {isThemeSettingOpen || <ChevronDown size={24} />}
                    {isThemeSettingOpen && <ChevronUp size={24} />}
                    {isThemeSettingOpen && <ThemeBoxSetting />}
                </div>
            </div>
        </>
    )
}

export default Header;