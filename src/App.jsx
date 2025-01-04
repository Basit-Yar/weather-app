import Header from './components/Header'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <div className='bg-green-100 w-full min-h-[100vh]'>
        <Header />
        {/* <Footer /> */}
        <SearchBar />
      </div>
    </>
  )
}

export default App
