import { createContext } from "react";


/**
 * Context is an interface
 * (blueprint / promise / idea )
 * it does not contain real implementation
 */


const DataContext = createContext({
    cart: [], //data
    user: {},
    addProductToCart: () => {}, //funtions to change the data
    clearCart: () => {}
});

export default DataContext