import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from '../Redux/slices/cartslices';
import RatingStar from '../RatingStar';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.allcart.products);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedProducts, setSortedProducts] = useState(data);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        setSortedProducts(data);
    }, [data]);

    const add = (item) => {
        dispatch(addcart(item));
        toast.success(`${item.title} added to cart`);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSort = (order) => {
        const sortedArray = [...sortedProducts];
        if (order === 'asc') {
            sortedArray.sort((a, b) => a.price - b.price);
        } else {
            sortedArray.sort((a, b) => b.price - a.price);
        }
        setSortedProducts(sortedArray);
        setSortOrder(order);
    };

    const handlePriceFilter = () => {
        let filteredProducts = [...data];

        if (minPrice !== '') {
            filteredProducts = filteredProducts.filter(item => parseFloat(item.price) >= parseFloat(minPrice));
        }
        if (maxPrice !== '') {
            filteredProducts = filteredProducts.filter(item => parseFloat(item.price) <= parseFloat(maxPrice));
        }

        setSortedProducts(filteredProducts);
    };

    return (
        <div>
            <div className='container mt-5'>
            <ToastContainer /> 
                <div className='row'>
                    <div className='col-md-2 col-lg-2 col-12'>
                        
                        <div className='category_content'>
                        <h5>Category</h5>
                            <div className='d-flex flex-column justify-content-start' style={{ gap: "-15px", paddingTop: "20px" }}>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("macbook")}>Macbook</span>
                                <hr></hr>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("towel")}>Towel</span>
                                <hr></hr>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("headphone")}>Headphone</span>
                                <hr></hr>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("tablet")}>Tablet</span>
                                <hr></hr>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("homepod")}>HomePod</span>
                                <hr></hr>
                                <span style={{ cursor: "pointer" }} onClick={() => handleCategoryClick(null)}>Show All</span>

                            </div>
                        </div>
                        <div>

                            <div className='price_range mt-5 mb-3'>

                                <h5 className='mb-3'>Price Range</h5>
                                    <div>
                                    <input type="number" placeholder="Min Price" className='form-control py-2' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                                    <input type="number" placeholder="Max Price" className='form-control py-2' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                                    </div>
                               
                                <div className='p-addtocart mt-4 mb-2'>
                                    <button onClick={handlePriceFilter}>Apply</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-10 col-md-10 col-12'>
                        <div className='sorting_detail_algorithm d-flex justify-content-end px-4'>
                            <select onChange={(e) => handleSort(e.target.value)}>
                                <option value="asc">Sort by A-Z</option>
                                <option value="desc">Sort by Z-A</option>
                            </select>
                        </div>

                        <div className='card_controls_allproduct d-flex flex-wrap px-5'>
                            {sortedProducts
                                .filter(item => !selectedCategory || item.category === selectedCategory)
                                .map((item, i) => (
                                    <div key={i}>
                                        <div class="card mb-4 border-0" style={{ width: "18rem", cursor: "pointer", background: "#f5f6f6", gap:"10px" }}>
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
        </div>
    )
}

export default ShopPage;







