import { Moon, Sun } from 'lucide-react'

const ThemeBoxSetting = () => {

    return (
        <>
            <div className="absolute w-fit right-0 top-10 z-10 border-0 border-violet-700 rounded-md text-violet-700 px-3 py-2 bg-zinc-400">

                <h1 className='font-semibold mb-1 whitespace-nowrap'>THEME SETTINGS</h1>
                <div className='flex'>
                    <button className='items-center p-2 mr-2 rounded-md hover:bg-violet-400 hover:text-violet-900 bg-transparent'
                        style={{border:"1px solid"}}>
                        <Moon className='sm:size-10 size-6'/>
                    </button>
                    <button className='items-center p-2 rounded-md hover:bg-violet-400 hover:text-violet-900 bg-transparent'
                        style={{border:"1px solid"}}>
                        {/* <Sun size={40} /> */}
                        <Sun className='sm:size-10 size-6' />
                    </button>                    
                </div>

            </div>
        </>
    )
}

export default ThemeBoxSetting;