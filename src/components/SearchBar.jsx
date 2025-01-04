import { Search } from 'lucide-react'

const SearchBar = () => {

    return (
        <>
            <div className="flex justify-between sm:mx-16 p-4 my-4 rounded-md bg-gray-100 shadow-md">
                <div className='md:w-2/5 w-4/6 relative border-0 border-red-600'>
                    <input
                        placeholder="Search for a city..."
                        className="w-full outline-none focus:border-black focus:border-2 p-2 rounded-md"
                    />
                    <Search className='absolute top-2.5 right-2.5 text-gray-400'/>
                </div>
                <h1>Temparature</h1>
            </div>
        </>
    )
}

export default SearchBar;
