import { Value } from "sass";
import "./product.css";
import QuantityPicker from "./Quantitypicker";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Product(props) {

    const addProductToCart = useContext(DataContext).addProductToCart;

    function addToCart() {
        console.log("Adding to cart");

        let copy = {...props.data};
        copy.quantity = 1;

        addProductToCart(copy);
    }


    return (
        <div className='product'>
            <span>Id: {props.data.id}</span>
            <img className="product_pic" src={"../images/" + props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>Total: $0.00</label>
                    <label>Price: ${props.data.price}</label>
                </div>
                <div>
                    <QuantityPicker />
                </div>
            </div>

            <div className="add-button">
                <button className="btn btn-sm btn-success" onClick={addToCart}>Add</button>
            </div>
        </div >
    );
}

export default Product