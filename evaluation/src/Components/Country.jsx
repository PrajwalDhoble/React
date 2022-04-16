import React from "react";
import { TableContext } from "../Context/TableContext";
import {useNavigate} from "react-router-dom"

export const Country=()=>{
    const {country,dispatch}=
    React.useContext(TableContext);
    const navigate =useNavigate();

    return(
        <div>
            <input 
            placeholder="Country"
            type="text"
            value={country}
            onChange={(e)=>
            dispatch({type:"CHANGE_COUNTRY",payload:e.target.value})
            }
            >
            </input>
            <button
            onClick={()=>{
                navigate("/add-city")
            }}
            >
                Next
            </button>
        </div>
    )
}