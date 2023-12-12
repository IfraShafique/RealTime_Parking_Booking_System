import React, {Children, useEffect} from "react";
import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import jwt from 'jwt-decode';
import {useAuth} from './AuthContext'

export const  PrivateRoutes = ({children, expectedRole}) => {
    const location  = useLocation();
    const navigate = useNavigate();  
    // const decodedToken = decodedToken(jwt);

    if(!isAuthenticated()){
        return <Navigate to='/login'/>
    }

    if(expectedRole && user && user.Role !== expectedRole){
        return <Navigate to= '/anauthorized'/>
    }

    return<>{Children}</>
}