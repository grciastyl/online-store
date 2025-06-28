import "./product.css";
import QuantityPicker from "./Quantitypicker";

function Product() {
    return (
        <div className='product'>
            <span>Id: 0000</span>
            <img src="https://picsum.photos/250/200" alt="" />
            <h3>This is a product</h3>
            <div className="price-section">
                <div className="prices">
                    <label>$total</label>
                    <label>$price</label>
                </div>
                <div>
                    <QuantityPicker />
                </div>
            </div>

        <div>
            <button className="btn btn-sm btn-success">Add</button>
        </div>
        </div >
    );
}

export default Product