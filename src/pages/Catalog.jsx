import Product from "../components/Product";
import "./Catalog.css";
import DataService from "../services/DataService";
import { useState, useEffect } from "react";

function Catalog() {

    const [products, setProducts] = useState([]);

    useEffect(function () {
        loadCatalog();
    }, []); // Empty dependency array means this effect runs once after the initial render

    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);

    }


    return (
        <div className='main-content page'>
            <h3>We have {products.length} new Products!</h3>
            <br />
            <div className="catalog-items">
                {
                    products.map((item) => (
                        <Product key={item.id} data={item}></Product>
                    ))
                }
            </div>
        </div>
    );
};


    export default Catalog;