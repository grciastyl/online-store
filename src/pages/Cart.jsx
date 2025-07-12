import { Button } from "bootstrap";
import "./Cart.css";
import GlobalProvider from "../state/GlobalProvider";
import { useContext } from "react";
import DataContext from "../state/DataContext";


function Cart() {

    const user = useContext(DataContext).user;

    return (
        <div className="cart page">
            <h1>Welcome to your Cart, {user.name}</h1>
            <div className="parent">
                <div className="products">
                    <h3>Your Products:</h3>
                </div>
                <div className="totals">
                    <h3>Total</h3>
                    <h4>$$$$</h4>
                    <br />
                    <button className="btn btn-outline-dark">Pay Now</button>
                </div>
            </div>
        </div>

    );
}



export default Cart;