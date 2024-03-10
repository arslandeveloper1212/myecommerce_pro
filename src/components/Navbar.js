import React from 'react'
import MegaMenu from './MegaMenu'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Topnav from './Topnav';

const Navbar = () => {
  const item = useSelector(state => state.allcart.cart)
  const Navigate = useNavigate();

  const handleClick = (e) => {
    Navigate("/cartdatapage")
  }

  return (
    <div>

      <div className='navbar_hit'>
        <Topnav />
        <div className='container'>
          <div className='row'>
            <div className='navbar_controls d-flex justify-content-between align-items-center my-3'>

              <Link to="/"> <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' alt='logo' />
              </Link>
              <div className='d-none d-lg-block'>
                <MegaMenu />
              </div>

              <form>
                <div className='d-flex d-lg-flex d-md-none d-sm-none'>
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </div>

              </form>
              <div className='section_nav_wrapper d-lg-flex d-md-none d-sm-none gap-10'>
                <PersonOutlineIcon />
                <p className='mb-0' style={{ cursor: "pointer" }}>Account</p>



                <Badge badgeContent={item.length} color="primary">

                  <AddShoppingCartIcon onClick={handleClick} />

                </Badge>


              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Navbar
