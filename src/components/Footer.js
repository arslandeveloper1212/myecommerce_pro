import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='row'>
                            <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' style={{width:"200px",paddingBottom:"30px"}} alt='img-fluid' />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <p>Accepted Payments</p>
                            <div className='pay_controls' style={{ gap: "10px" }}>
                                <div className='d-flex' style={{ gap: "10px" }}>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay1.png' />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay2.png' />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay3.png' />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay4.png' />
                                    </div>
                                </div>


                                
                                <div className='d-flex' style={{ gap: "10px" }}>
                                <div className='sigle_cart_item'>
                                    <img src='/img/pay5.png' />
                                </div>
                                <div className='sigle_cart_item'>
                                    <img src='/img/pay6.png' />
                                </div>
                                <div className='sigle_cart_item'>
                                    <img src='/img/pay7.png' />
                                </div>
                                <div className='sigle_cart_item'>
                                    <img src='/img/pay8.png' />
                                </div>
                                </div>
                                
                            </div>





                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-12 '>
                        <div className='row'>
                            <div className='section_footer_heading'>
                                <h4>Department</h4>
                            </div>
                            <div className='section_footer_content d-flex flex-column'>
                                <span><Link to="#">Macbook</Link></span>
                                <span><Link to="#">Towel</Link></span>
                                <span><Link to="#">Headphone</Link></span>
                                <span><Link to="#">Tablet</Link></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-12' >
                    <div className='row'>
                    <div className='section_footer_heading'>
                        <h4>About Us</h4>
                    </div>
                    <div className='section_footer_content d-flex flex-column'>
                        <span><Link to="#">Macbook</Link></span>
                        <span><Link to="#">Towel</Link></span>
                        <span><Link to="#">Headphone</Link></span>
                        <span><Link to="#">Tablet</Link></span>
                    </div>
                </div>
                    </div>
                    <div className='col-lg-2 col-12'>
                    <div className='row'>
                    <div className='section_footer_heading'>
                        <h4>Services</h4>
                    </div>
                    <div className='section_footer_content d-flex flex-column'>
                        <span><Link to="#">Macbook</Link></span>
                        <span><Link to="#">Towel</Link></span>
                        <span><Link to="#">Headphone</Link></span>
                        <span><Link to="#">Tablet</Link></span>
                    </div>
                </div>
                    </div>
                    <div className='col-lg-2 col-12'>
                    <div className='row'>
                    <div className='section_footer_heading'>
                        <h4>Help</h4>
                    </div>
                    <div className='section_footer_content d-flex flex-column'>
                        <span><Link to="#">Macbook</Link></span>
                        <span><Link to="#">Towel</Link></span>
                        <span><Link to="#">Headphone</Link></span>
                        <span><Link to="#">Tablet</Link></span>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
