import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Redux/slices/cartslices';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style.css'; // Import the CSS file
import Login from './Login';

const CartDataPage = () => {
  const navigate = useNavigate();

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();
  const [itemsToShow, setItemsToShow] = useState(3); // State to track number of items to display

  const removeHere = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 5); // Increase the number of items to display by 3
  };

  const onLoginPage = () => {
    if (localStorage.getItem("user")) {
      // User is logged in, proceed to checkout
      navigate("/checkout");
    } else {
      // User is not logged in, redirect to login page
      navigate("/login");
    }
  };

  return (
    <main className="page">
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div className="content">
            {cart.length > 0 ? (
              <div>
                <div className="row p-5">
                  <div className="col-lg-8">
                    <div className="items pb-5">
                      {cart.slice(0, itemsToShow).map((item, index) => (
                        <div key={index} className="product">
                          <div className="row border py-sm-4 py-0">
                            <div className="col-md-3">
                              <img className="img-fluid mx-auto d-block image" src={item.image} alt={item.title} />
                            </div>
                            <div className="col-md-9">
                              <div className="info">
                                <div className="product-name">
                                  <Link to={`/cartdatapage/${item.id}`}>{item.title}</Link>
                                  <div className="product-info">
                                    <h5 className=''>Price: <strong className="value fs-4">${item.price}</strong></h5>
                                    <div className='m-2'>Quantity: &nbsp;
                                      <button className="btn btn-outline-secondary btn-sm" onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
                                      <span className="mx-2">{item.quantity}</span>
                                      <button className="btn btn-outline-secondary btn-sm" onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
                                    </div>
                                    <div>
                                      <button className='btn btn-danger btn-sm mt-2' onClick={() => removeHere(item.id)}>Remove</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="summary">
                      <h3>Summary</h3>
                      <div className="summary-item"><span className="text">Total Quantity</span><span className="price"><strong>{totalQuantity}</strong></span></div>
                      <br></br>
                      <div className="summary-item"><span className="text">Total Price</span><span className="price">$ <strong>&nbsp; {totalPrice}</strong></span></div>
                      <br></br>
                      <button className="btn btn-primary btn-lg btn-block mt-4 col-12" onClick={onLoginPage}>Checkout</button>
                    </div>
                  </div>
                </div>
                {cart.length > itemsToShow && (
                  <div className="row justify-content-center p-4">
                    <div className="col-lg-8 text-center">
                      <button className="btn btn-secondary" onClick={loadMoreItems}>Load More</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="row justify-content-center p-4">
                <div className="col-lg-8 text-center">
                  <p>Your cart is empty</p>
                  <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartDataPage;
