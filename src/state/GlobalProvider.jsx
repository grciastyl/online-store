import { useState } from "react";
import DataContext from "./DataContext";

// GlobalProvider provides all the components access to the context
function GlobalProvider(props) {  //props is the object that contains all the properties passed to the component
    const [cart, setcart] = useState([]); // cart is an array that will hold the products added to the cart
    const [user, setUser] = useState({ loggedIn: true, name: "Chris" }); // user is an object that will hold the user information
    // The cart and user states are initialized with empty values.

    function addProductToCart(prod) {
        /**
         * For Obj and Array in state variable
         * 1 - create a copy
         * 2 - modify copy
         * 3 - set the copy back
         */
        let copy = [...cart];
        copy.push(prod);
        setcart(copy);

    }

    function clearCart() {

    }

    return (

        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart, // This function will be used to add products to the cart
            clearCart: clearCart // This function will be used to clear the cart
        }}>
            {props.children} {/* This is where the children components will be rendered */}
        </DataContext.Provider>
    );
}

export default GlobalProvider