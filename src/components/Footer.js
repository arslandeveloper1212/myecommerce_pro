import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Define data in JSON format
    const footerData = [
        {
            section: 'Department',
            links: ['Macbook', 'Towel', 'Headphone', 'Tablet']
        },
        {
            section: 'About Us',
            links: ['Macbook', 'Towel', 'Headphone', 'Tablet']
        },
        {
            section: 'Services',
            links: ['Macbook', 'Towel', 'Headphone', 'Tablet']
        },
        {
            section: 'Help',
            links: ['Macbook', 'Towel', 'Headphone', 'Tablet']
        }
    ];

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='row'>
                            <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' style={{ width: "200px", paddingBottom: "30px" }} alt='img-fluid' />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <p>Accepted Payments</p>
                            <div className='pay_controls' style={{ gap: "10px" }}>
                                <div className='d-flex' style={{ gap: "10px" }}>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay1.png' alt="payment-1" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay2.png' alt="payment-2" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay3.png' alt="payment-3" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay4.png' alt="payment-4" />
                                    </div>
                                </div>


                                <div className='d-flex' style={{ gap: "10px" }}>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay5.png' alt="payment-5" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay6.png' alt="payment-6" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay7.png' alt="payment-7" />
                                    </div>
                                    <div className='sigle_cart_item'>
                                        <img src='/img/pay8.png' alt="payment-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {footerData.map((item, index) => (
                        <div key={index} className='col-lg-2 col-md-6 col-12'>
                            <div className='row'>
                                <div className='section_footer_heading'>
                                    <h4>{item.section}</h4>
                                </div>
                                <div className='section_footer_content d-flex flex-column' style={{marginTop:"20px"}}>
                                   
                                    {item.links.map((link, idx) => (
                                        <p key={idx} >
                                            <Link style={{textDecoration:"none", color:"black"}} to="#">{link}</Link>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
