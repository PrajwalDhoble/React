import React from "react";
import {TableContext} from "../Context/TableContext"
import {useNavigate} from "react-router-dom"

export const City=()=>{
    const {
        dispatch,
        city,
        population,
        handleSubmit
    }=React.useContext(TableContext);

    if(!country){
        return <Navigate to="/add-country"/>
    }

    return (
        <div>
            <input
            placeholder="city"
            type="text"
            value={city}
            onChamge={(e)=>
                dispatch({
                    type:"CHANGE_CITY",
                    payload:e.target.value
                })
            }
            >
            </input>
            <input
            placeholder="population"
            type="text"
            value={population}
            onChange={(e)=>
            dispatch({type:"CHANGE_POPULATION",payload:e.target.value})
        }
            >
            </input>
            <button
            disabled={
                !country
            }
            onClick={handleSubmit}
            >
               Submit 
            </button>
        </div>
    )
}