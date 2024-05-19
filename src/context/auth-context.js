import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext();

const initialValue = {
    
}

const AuthProvider = ({children}) => {

    const [state, authDispatch] = useReducer(authReducer, initialValue)

    return (
        <AuthContext.Provider value={{state, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider};