import "./Quantitypicker.css";
import { useState } from "react";


function QuantityPicker(props) {

    const [quantity, setQuantity] = useState(1);

    function increase() {
        const val = quantity + 1;
        setQuantity(val);
        props.onChange(val); //execute the function recieved from the parent (product)
    }

    function decrease() {
        const val = quantity - 1
        setQuantity(val);
        props.onChange(val); //execute the function recieved from the parent (product)
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