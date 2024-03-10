import React from 'react'
import Slider from "react-slick";
import RatingStar from './RatingStar';
import AddtoCartbutton from './AddtoCartbutton';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './Redux/slices/cartslices';
const BestDeal = () => {

    const getitem = useSelector((state) => state.allcart.products)
    console.log(getitem);

    const dispatch = useDispatch();


    var settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d1.png' alt='homepod mini' />
                    </div>
                    <div>
                        <h4>HomePod mini</h4>
                        <strong>$ 239.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Table with air purifier, staned veneer/black</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                        
                    </div>

                </div>
                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d2.png' alt='homepod mini' />
                    </div>
                    <div>
                        <h4>Instax Mini 9</h4>
                        <strong>$ 99.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Selfie mode and selfie mirror, Macro mode</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                       
                    </div>



                </div>
                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d3.png' alt='homepod mini' />
                    </div>
                    <div >
                        <h4>Base Camp Duffel M</h4>
                        <strong>$ 159.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Table with air purifier, staned veneer/black</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                       
                    </div>
                </div>

                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d4.png' alt='homepod mini' />
                    </div>
                    <div >
                        <h4>Base Camp Duffel M</h4>
                        <strong>$ 159.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Table with air purifier, staned veneer/black</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                       
                    </div>
                </div>


                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d5.png' alt='homepod mini' />
                    </div>
                    <div >
                        <h4>Base Camp Duffel M</h4>
                        <strong>$ 159.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Table with air purifier, staned veneer/black</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                        
                    </div>
                </div>


                <div>

                    <div className='bestdeal_hit'>
                        <img src='./img/d6.png' alt='homepod mini' />
                    </div>
                    <div >
                        <h4>Base Camp Duffel M</h4>
                        <strong>$ 159.00</strong>
                    </div>
                    <p className='mb-0 mt-2'>Table with air purifier, staned veneer/black</p>
                    <RatingStar />
                    <div className='btn_addtocart mt-2'>
                        
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default BestDeal
