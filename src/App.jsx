import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Cart from './pages/Cart'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* anything inside the routes will be rendered only if the path matches */}
        <Route path="/" element={<Home />} ></Route> {/*this path will be seen as the default path*/}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        
      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default App
