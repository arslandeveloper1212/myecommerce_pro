import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './Redux/slices/cartslices';
import RatingStar from './RatingStar';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Allproducthere = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.allcart.products);
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category

    const add = (item) => {
        dispatch(addcart(item));
        toast.success(`${item.title} added to cart`);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='container mb-3'>
            <ToastContainer /> 
            <div className='row d-flex justify-content-between'>
                <div className='col-lg-2'>
                    <div className='p-addtocart d-flex flex-column' style={{ gap: "20px" }}>
                        <button onClick={() => handleCategoryClick("macbook")}>Macbook</button>
                        <button onClick={() => handleCategoryClick("towel")}>Towel</button>
                        <button onClick={() => handleCategoryClick("headphone")}>Headphone</button>
                        <button onClick={() => handleCategoryClick("tablet")}>Tablet</button>
                        <button onClick={() => handleCategoryClick("homepod")}>HomePod</button>
                        <button onClick={() => handleCategoryClick(null)}>Show All</button> {/* Button to show all products */}
                    </div>
                </div>
                <div class='col-lg-10'>
                    <div className='card_controls_allproduct d-flex flex-wrap' style={{ gap: "40px" }}>
                        {data && data
                            .filter(item => !selectedCategory || item.category === selectedCategory)
                            .map((item, i) => (
                                <div key={i}>
                                    <div class="card mb-4 border-0" style={{ width: "18rem", cursor: "pointer", background: "#f5f6f6" }}>
                                        <Link to={`/cartdatapage/${item.id}`} style={{ textDecoration: "none" }}>
                                            <div class="zoom-img">
                                                <img class="card-img-top" src={item.image} alt="Card image cap" className='bestdeal_hit img-fluid h-25' style={{ height: "15rem", width: "100%", padding: "20px" }} />
                                            </div>
                                        </Link>
                                        <div class="card-body">
                                            <div className='card_controls_content d-flex justify-content-between'>
                                                <h4 class="card-title">{item.title}</h4>
                                                $ <strong><h3>{item.price}</h3></strong>
                                            </div>
                                            <p class="card-text mb-0">{item.desc}</p>
                                            <RatingStar />
                                            <div className='p-addtocart mt-2 mb-2'>
                                                <button onClick={() => add(item)}>Add to Cart</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allproducthere;
