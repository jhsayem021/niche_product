import React, { useEffect, useState } from 'react';
// import useCart from '../../hooks/useCart';
// import Cart from '../Cart/Cart';
// import { addToDb} from '../../utilities/fakedb';
// import { useHistory } from 'react-router';
import './OrderReview.css'
import AllService from '../AllService/AllService';
import { Spinner } from 'react-bootstrap';

const OrderReview = () => {
    // const [cart, setCart] = useCart();
    // const history = useHistory();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data.products);
            });
    }, []);

    // const handleAddToCart = (product) => {
    //     const exists = cart.find(pd => pd.key === product.key);
    //     let newCart = [];
    //     if (exists) {
    //         const rest = cart.filter(pd => pd.key !== product.key);
    //         exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, product];
    //     }
    //     else {
    //         product.quantity = 1;
    //         newCart = [...cart, product];
    //     }
    //     setCart(newCart);
    //     addToDb(product.key);
        
    // }
    // const handleProceedToShipping = () => {
    //     history.push('/shipping');
    // }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        (displayProducts.length ===0) ?
                        <div className="d-flex justify-content-between">
                            <div>
                            </div>
                            <div >
                                <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                            </div>
                        </div>
                        : 
                        displayProducts.map(product =><AllService
                            key={product._id}
                            product={product}
                            // handleAddToCart={handleAddToCart}
                        ></AllService>)                
                   }
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Shipping Now</button>
                </Cart>
            </div> */}
        </div>
    );
};

export default OrderReview;