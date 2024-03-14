import React, { useState } from 'react'
import { SellingStore } from './Getupdata'
const BestSellingStore = () => {
    const [data, getdata] = useState(SellingStore);
    console.log(data);
    return (
        <div className='container'>
            <div className='row'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-lg-3 col-md-3 col-12 font_roboto' key={index} >
                                <div class="zoom_without_width">
                                    <img src={item.image} alt='img-get' className='img-fluid' style={{ borderRadius: "10px" }} />
                                </div>

                                <img src={item.imgh1} alt='img-get' className='img-fluid  d-sm-none d-lg-block d-md-block' style={{ marginTop: "-30px", marginLeft: "7px" }} />


                                <h3 style={{ fontSize: "22px" }}>{item.text}</h3>
                                <p style={{ fontSize: "12px", color: "#c1c0c0" }}>{item.desc}</p>
                                <div className='d-flex align-items-center gap-2 delivery_css'>
                                    <img src={item.icon} alt='img-get' className='img-fluid' />
                                    <span style={{ color: "#c34382", fontSize: "12px" }}>{item.icontext}</span>
                                </div>
                            </div>


                        )
                    })
                }


            </div>
        </div>
    )
}

export default BestSellingStore
