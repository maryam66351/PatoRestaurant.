import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/header/Navbar'
import Home from './pages/Home'
import Footer from './assets/components/Footer'
import './App.css'
import Menu from './pages/Menu'
import ReservationMain from './pages/ReservationMain'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


function App() {

  return (
    <div className='relative overflow-hidden max-w-[1600px] m-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservation' element={<ReservationMain/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
