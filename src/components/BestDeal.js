import React, { useState } from 'react';
import Slider from "react-slick";
import RatingStar from './RatingStar';
import AddtoCartbutton from './AddtoCartbutton';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './Redux/slices/cartslices';
import { bestDeal } from './Pages/CartData';

const BestDeal = () => {
    const getitem = useSelector((state) => state.allcart.products);
    const dispatch = useDispatch();
    const [data, useData] = useState(bestDeal);

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
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div style={{ gap: "20px" }}>
            <Slider {...settings} style={{ display: 'flex', flexDirection: 'row' }}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div className='d-flex flex-column'>
                            <div className='bestdeal_hit zoom-img'>
                                <img src={item.image} alt='homepod mini' className='img-fluid' />
                            </div>
                            <div className='bestdeal_content'>
                                <h4>{item.title}</h4>
                                <strong>$ {item.price}</strong>
                                <p className='mb-0 mt-2'>{item.description}</p>
                                <div className='d-flex align-items-center gap-2'>
                                    <RatingStar className="rating" />
                                    <span>{item.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BestDeal;
