import React from 'react'

const TrendingProducts = () => {
    return (
        <div>
            <div className='container '>
                <div className='row trending_products'>
                    <div className='col-md-6 col-lg-6 col-12' style={{ background: "#F5F6F6" }}>
                        <div className='zoom_img_width_trending'>
                            <img src="/img/allpro/t1.png" alt='trending' className='img-fluid' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                        </div>

                        <h3 className='mt-4 mb-2 '>Furniture Village</h3>
                        <p>Delivery with in 24 hours</p>
                        <button className='btn_green_class padding_trending_given'>Shop Now</button>
                    </div>

                    <div className='col-md-6 col-lg-6 col-12 mt-sm-4 mt-md-0' style={{ background: "#F5F6F6"  }}>
                        <div className='zoom_img_width_trending'>
                            <img src="/img/allpro/t2.png" className='img-fluid' alt='trending' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                        </div>
                        <h3 className='mt-4 mb-2'>Fashion World</h3>
                        <p>Delivery with in 24 hours</p>
                        <button className='btn_green_class'>Shop Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
