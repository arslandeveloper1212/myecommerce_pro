import React, { useState } from 'react'
import getupdata from './Getupdata';
const GetUpTo = () => {
    const [item, Setitem] = useState(getupdata);

    console.log(item);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-3 col-12'>
                    <div className='getupto_controls mt-3 mb-3'>
                        <div className='d-flex flex-wrap justify-content-sm-center gap-5'>
                            {
                                item.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="card zoom-img " style={{ width: "18rem", height: "25rem", backgroundColor: e.backgroundColor, border: "none" }}>

                                                <div className="card-body">
                                                    <h2 className="card-title m-auto">{e.heading}</h2>
                                                    <div className=' d-flex mx-2 mt-2'>
                                                        <h2 style={{ color: e.color }}><span>$</span>{e.price}</h2>
                                                    </div>
                                                    <p>{e.desc}</p>


                                                </div>
                                                <div  class="zoom-img" >
                                                <img src={e.image} className="card-img-end" alt="..." />
                                                </div>
                                                
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetUpTo
