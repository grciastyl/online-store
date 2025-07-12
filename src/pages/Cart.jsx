import { Button } from "bootstrap";
import "./Cart.css";
import GlobalProvider from "../state/GlobalProvider";
import { useContext } from "react";
import DataContext from "../state/DataContext";
import { Link } from "react-router-dom";


function Cart() {


    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function Pay() {
        console.log("Pay now works!");
    };

    return (
        <div className="cart page">
            <h1>Welcome to your Cart, {user.name}</h1>
            <h5>We have {cart.length} products waiting for you!</h5>
            <div className="parent">
                <div className="products">
                    <h3>Your Products:</h3>
                    {cart.map(item =>
                        <div key={item.id} className='prod-cart'>
                            <img src={"../images/" + item.image} alt="" />
                            <h6>{item.title}</h6>
                            <label className="price-label">Price:${item.price}</label>
                            <label className="qty-label">Qty:{item.quantity}</label>
                            <button>Remove</button>
                        </div>
                    )}
                </div>
                <div className="totals">
                    <h3>Total</h3>
                    <h4>$$$$</h4>
                    <br />
                    <Link  onClick={Pay} to="/payment" className="btn btn-outline-dark btn-lg">Pay Now</Link>
                </div>
            </div>
        </div>

    );
}



export default Cart;