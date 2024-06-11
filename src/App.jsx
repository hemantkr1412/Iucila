
import './App.css'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import Sidebar from './Components/navbar/Sidebar'

function App() {

  return (
    <div className='app'>
        <Navbar/>
        <Sidebar />
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
