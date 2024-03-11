import React, { useState } from 'react'
import data from './data'
const ShopOur = () => {
    const [item, Setitem] = useState(data);

    console.log(item);
    return (
        <div>
            <div className='col-12'>
                <div className='d-flex flex-wrap align-items-center' style={{gap:"27px"}}>
                    {
                        item.map((e, i) => {
                            return (
                                <div>
                                    <div className="card text-white align-items-center position-relative" style={{ width: "12rem", fontFamily:"Roboto" }}>
                                       <div className='zoom-img_width'>
                                       <img src={e.image} className="card-img-top" alt="..." />
                                       </div>
                                    
                                        <div className="card-body position-absolute">
                                            <h5 className="card-title text-center m-auto">{e.title}</h5>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ShopOur
