import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import DropFunction from './DropFunction';
import DropFunctiontwo from './DropFunctiontwo';


const Topnav = () => {
    return (
    <div className="topnav_bg bg_secondary d-sm-none d-md-none d-lg-block">
                <div className='container'>
                    <div className='row'>
                    <div className='col-12'>
                        <div className='topnav_controls d-flex justify-content-between text-white align-items-center '>
                            <div className='section_left'>
                                <CallIcon />
                                <span>+001234567890</span>
                            </div>
                            <div className='section_middle d-flex align-items-center pt-2'>
                            <div className='d-flex text-center mt-1 gap-15'>  
                            <p>Get 50% Off on Selected Items &nbsp;
                                | &nbsp; Shop Now</p>
                                </div> 
                            </div>

                            <div className='section_right d-flex gap-30'>
                            <DropFunction  name="Eng" />
                            <DropFunctiontwo name = "Location"/>
                        
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
     
    )
}

export default Topnav
