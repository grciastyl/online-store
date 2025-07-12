import "./Quantitypicker.css";
import { useState } from "react";


function QuantityPicker() {

    const [quantity, setQuantity] = useState(1);

    function increase() {
        const val = quantity + 1;
        setQuantity(val);
    }

    function decrease() {
        const val = quantity - 1
        setQuantity(val);
    }


    return (
        <div className="qt-picker">
            <button onClick={decrease} className="btn btn-sm btn-outline-dark" disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button onClick={increase} className="btn btn-sm btn-outline-dark">+</button>
        </div>

    );
}

export default QuantityPicker;