import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

const CartDetailPage = () => {
    const { id } = useParams();
    const productId = parseInt(id);
    const products = useSelector(state => state.allcart.products);
    const [currentImage, setCurrentImage] = useState(null); // State to track current large image

    const productIndex = products.findIndex(product => product.id === productId);
    const product = products[productIndex];

    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div>
            {product ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-12'>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: product.title,
                                    isFluidWidth: true,
                                    src: currentImage || product.image // Use currentImage if set, otherwise use main product image
                                },
                                largeImage: {
                                    src: currentImage || product.image, // Use currentImage if set, otherwise use main product image
                                    width: 1200,
                                    height: 1800
                                }
                            }} />

                            <div>
                                {product.imagehalf.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        style={{ marginRight: '10px', marginBottom: '10px', width: '100px', height: 'auto', cursor: 'pointer' }}
                                        onClick={() => handleThumbnailClick(image)} // Click handler to set current image
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-12'>
                            <h4 style={{ marginTop: "60px" }}>{product.title}</h4>
                            <p style={{ marginTop: "20px" }}>{product.description}</p>
                            <strong style={{ fontSize: "23px", marginTop: "20px" }}>${product.price}</strong>
                            <p style={{ marginTop: "20px" }}>Rating: {product.rating}</p>
                            <div className='p-addtocart'>
                                <Link to={`/cartdatapage`}>
                                    <button>Shopping Cart</button>
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
