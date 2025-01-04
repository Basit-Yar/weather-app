import { Search } from 'lucide-react'

const SearchBar = () => {

    return (
        <>
            <div className="flex justify-between items-center mx-3 sm:mx-16 p-3 sm:p-4 my-4 rounded-md bg-green-100 shadow-md">
                <div className='md:w-2/5 w-4/6 relative border-0 border-red-600'>
                    <input
                        placeholder="Search for a city..."
                        className="w-full outline-none focus:border-green-700 focus:border-2 p-2 rounded-md"
                    />
                    <Search className='absolute top-2.5 right-2.5 text-gray-400'/>
                </div>
                <div className='w-fit border border-green-700 rounded-md py-1 px-3 bg-white'>
                    Units{/* units like for celsius, kelvin, f.. */}
                </div>
            </div>
        </>
    )
}

export default SearchBar;
