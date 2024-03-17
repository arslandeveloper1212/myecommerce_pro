import React from 'react'
import MegaMenu from './MegaMenu'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Topnav from './Topnav';
import DrawerSideBar from './DrawerSideBar';




const Navbar = () => {
  const item = useSelector(state => state.allcart.cart)
  const Navigate = useNavigate();

  const handleClick = (e) => {
    Navigate("/cartdatapage")
  }

  return (
    <div>

      <div className='navbar_hit position-relative'>
        <Topnav />
        <div className='container '>
          <div className='row'>
            <div className='navbar_controls d-flex justify-content-between align-items-center my-3'>

              <Link to="/"> <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' className='img-fluid' alt='logo' />
              </Link>
              <div className='mega_menu_list_navbar'>
                <MegaMenu />
              </div>

              <form>
                <div className='d-flex d-lg-flex d-md-none d-sm-none align-items-center' style={{ position: "relative" }}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"302px"}} />
                  <i className="fa fa-search" style={{ position: "absolute", right: "0", marginRight: "20px" }}></i>
                </div>

              </form>

              <div className='section_nav_wrapper'>

                <PersonOutlineIcon />
                <span className='mb-0' style={{ cursor: "pointer" }}>Account </span>
                &nbsp;
                <Badge badgeContent={item.length} color="primary">
                  <AddShoppingCartIcon onClick={handleClick} />
                </Badge>


              </div>
              
            </div>

          </div>

          <div className='row d-flex d-lg-none d-md-none d-sm-block' style={{ marginTop: "10px", paddingRight: "10px", position: "absolute", top: "0px", right: "0px" }}>
            <DrawerSideBar />

          </div>

        </div>


        <div className='badge-hidden' style={{ position: "absolute", top: "0", right: "0", marginTop: "21px", marginRight: "65px", cursor: "pointer" }}>
          <Badge badgeContent={item.length} color="primary">
            <AddShoppingCartIcon onClick={handleClick} />
          </Badge>
        </div>

      </div>
    </div>

  )
}

export default Navbar
