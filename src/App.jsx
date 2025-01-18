import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherLayout from './components/WeatherLayout'

function App() {

  // const appId = import.meta.env.VITE_APP_ID;
  // console.log('Your API Key:', appId);
  return (
    <>
      <div className='bg-green-50 w-full min-h-[100vh] py-4'>
        <Header />
        <SearchBar />
        <WeatherLayout />
      </div>
    </>
  )
}

export default App
