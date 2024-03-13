import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import { Routes, Route } from 'react-router-dom';

import CartDataPage from './components/Pages/CartDataPage';
import PagenotFound from './components/PagenotFound';
import CartDetailPage from './components/Pages/CartDetailPage';
import Footer from './components/Footer';
import ShopPage from './components/Pages/ShopPage';
import Furniture from './components/MegaMenuClicker.js/Furniture';

import Laptop from './components/MegaMenuClicker.js/Laptop';
import HandBag from './components/MegaMenuClicker.js/HandBag';
import Headphone from './components/MegaMenuClicker.js/Headphone';

function App() {
  return (
    <div className='app'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartdatapage' element={<CartDataPage />} />
        <Route path='/cartdatapage/:id' element={<CartDetailPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='*' element=<PagenotFound /> />
       {/* megamenu routes*/}
        <Route path='/'>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/hand-bag' element={<HandBag/>}/>
        <Route path='/headphone' element={<Headphone/>}/>
      </Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
