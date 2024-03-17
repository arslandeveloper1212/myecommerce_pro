import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import CartDataPage from './components/Pages/CartDataPage';
import PagenotFound from './components/PagenotFound';
import CartDetailPage from './components/Pages/CartDetailPage';
import Footer from './components/Footer';
import ShopPage from './components/Pages/ShopPage';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Logout from './components/Pages/Logout';
import Furniture from './components/MegaMenuClicker.js/Furniture';
import Laptop from './components/MegaMenuClicker.js/Laptop';
import HandBag from './components/MegaMenuClicker.js/HandBag';
import Headphone from './components/MegaMenuClicker.js/Headphone';
import ContactForm from './components/Pages/ContactForm';

function App() {
  const location = useLocation();

  // Function to determine whether to show Navbar and Footer
  const shouldShowNavAndFooter = () => {
    const { pathname } = location;
    return !['/login', '/logout', '/signup'].includes(pathname);
  };

  return (
    <div className='app'>
      {shouldShowNavAndFooter() && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartdatapage' element={<CartDataPage />} />
        <Route path='/cartdatapage/:id' element={<CartDetailPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact-form' element={<ContactForm />} />
        <Route path='/logout' element={<Logout />} />
        {/* Nested routes */}
        <Route path='/category'>
          <Route path='furniture' element={<Furniture />} />
          <Route path='laptop' element={<Laptop />} />
          <Route path='hand-bag' element={<HandBag />} />
          <Route path='headphone' element={<Headphone />} />
        </Route>
        {/* Protected routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* Catch-all route */}
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      {shouldShowNavAndFooter() && <Footer />}
    </div>
  );
}

export default App;
