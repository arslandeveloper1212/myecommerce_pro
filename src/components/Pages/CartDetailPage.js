import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const CartDetailPage = () => {
    
    const { id } = useParams();
    // Convert id to integer
    const productId = parseInt(id);

    const products = useSelector(state => state.allcart.products);
    console.log(products);

    // Find the product with the matching id
    const productIndex = products.findIndex(product => product.id === productId);
    const product = products[productIndex];

    // console.log(product);

    return (
        <div>
            {product ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <img src={product.image} alt={product.title} className='w-100' />
                        </div>
                        <div className='col-lg-5 col-md-6 col-12'>
                            <h4 style={{marginTop:"60px"}}>{product.title}</h4>
                            <p style={{marginTop:"60px"}}>{product.description}</p>
                            <strong style={{fontSize:"23px", marginTop:"20px"}}>${product.price}</strong>
                           
                            <p style={{ marginTop:"20px"}}>Rating:{product.rating}</p>
                            <div className='p-addtocart'>
                            <Link to={`/cartdatapage`}>
                            <button>Go to Cart</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Product not found</p>
                </div>
            )}
        </div>
    );


};

            export default CartDetailPage;
