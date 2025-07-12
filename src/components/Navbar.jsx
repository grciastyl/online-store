import { useContext } from "react";
import Cart from "../pages/Cart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";

function Navbar() {

    const user = useContext(DataContext).user;//get to the context, get the user and store it as a variable "user"


    return (
        <div>
            <nav className="navbar navbar-expand-lg" data-bs-theme= "dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Online Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <span className='btn btn-outline-light'>
                                {user.name}
                            </span>
                            <Link className="btn btn-outline-light" to="./cart">Cart</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar