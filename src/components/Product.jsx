import "./product.css";
import QuantityPicker from "./Quantitypicker";

function Product(props) {

    return (
        <div className='product'>
            <span>Id: {props.data.id}</span>
            <img src={"../images/"+props.data.image} alt="" />
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
            <button className="btn btn-sm btn-success">Add</button>
        </div>
        </div >
    );
}

export default Product