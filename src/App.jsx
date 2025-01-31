import Header from './components/Header'
import './App.css'
import WeatherLayout from './components/WeatherLayout'
import { WeatherContextProvider } from './context/WeatherContext'

function App() {

  // const appId = import.meta.env.VITE_APP_ID;
  // console.log('Your API Key:', appId);
  return (
    <>
      <div className='bg-green-50 w-full min-h-[100vh] py-4'>

        <WeatherContextProvider>
          <Header />
          <WeatherLayout />
        </WeatherContextProvider>

      </div>
    </>
  )
}

export default App
