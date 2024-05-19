import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const WishlistContext = createContext();

const initialValue = {
    wishlist: []
}

const WishlistProvider = ({children}) => {

    const [{wishlist}, wishlistDispatch] = useReducer(wishlistReducer, initialValue)

    return (
        <WishlistContext.Provider value={{wishlist, wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider};