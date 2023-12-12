import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const login = (userData) => {
        setUser(userData);
    }

    const isAuthenticated = () => {
        return user != null;
    }

    return(
        <AuthContext.Provider value= {{user, login, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}