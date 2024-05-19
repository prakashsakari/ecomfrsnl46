import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const initialValue = {
    cart: []
}

const CartProvider = ({children}) => {

    const [{cart}, cartDispatch] = useReducer(cartReducer, initialValue)

    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider};