import react from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom"

export const Home =()=>{
    const {token,isAuthenticated}=useSelector((state)=>state.login);
    const dispatch=useDispatch();

    if (!isAuthenticated){
        return <Navigate to="/login"></Navigate>
    }
}