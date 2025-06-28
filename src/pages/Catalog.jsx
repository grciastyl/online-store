import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {
    return (
        <div className='main-content'>
            <h1>This is Our Catalog!</h1>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )

}

export default Catalog;