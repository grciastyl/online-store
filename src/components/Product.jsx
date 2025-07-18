import { Value } from "sass";
import "./product.css";
import QuantityPicker from "./Quantitypicker";
import { useContext, useState } from "react";
import DataContext from "../state/DataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const addProductToCart = useContext(DataContext).addProductToCart;

    function addToCart() {
        console.log("Adding to cart");

        let copy = { ...props.data };
        copy.quantity = quantity;

        addProductToCart(copy);
    }

    function handleQuantity(val) {
        console.log("changed", val);
        setQuantity(val);
    }

    return (
        <div className='product'>
            <span className="id-tag">Id: {props.data.id}</span>
            <img className="product_pic" src={"../images/" + props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>Total: ${(props.data.price * quantity).toFixed(2)}</label>
                    <label>Price: ${props.data.price.toFixed(2)}</label>
                </div>
            </div>

            <div className="add-button controls">
                <QuantityPicker onChange={handleQuantity} />
                <button className="btn btn-sm btn-success" onClick={addToCart}>Add</button>
            </div>
        </div >
    );
}

export default Product