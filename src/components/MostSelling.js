import React from 'react';
import Slider from "react-slick";
import RatingStar from './RatingStar';
import { useDispatch } from 'react-redux';
import { addcart } from './Redux/slices/cartslices';
import { MostSelling } from '../components/Pages/CartData';

const MostSellingComponent = () => {
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
                    slidesToScroll: 2,
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
        
        <div style={{cursor:"pointer"}}>
            <Slider {...settings}>
                {MostSelling.map((item, index) => (
                    <div key={index} >
                    
                        <div className='bestdeal_hit zoom-img_width'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <strong>${item.price}</strong>
                        </div>
                        <p className='mb-0 mt-2'>{item.description}</p>
                        <RatingStar />
                        
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default MostSellingComponent;
