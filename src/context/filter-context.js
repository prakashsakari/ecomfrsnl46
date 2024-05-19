import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const initialValue = {
    sortByPrice: '',
    discount: 0
}

const FilterProvider = ({children}) => {

    const [{sortByPrice, discount}, filterDispatch] = useReducer(filterReducer, initialValue)

    return (
        <FilterContext.Provider value={{sortByPrice, discount, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider};