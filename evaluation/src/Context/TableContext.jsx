import React from "react"

export const TableContext=React.createContext();

const initState={
    country : "",
    city :"",
    population:""
}

function reducer(state,action){
    switch(action.type){
        case "CHANGE_COUNTRY":
            return {...state,country:action.payload};
        case "CHANGE_CITY":
            return {...state,city:action.payload};
        case "CHANGE_POPULATION":
            return {...state,population:action.payload};
            default :
            throw new Error();
    }
}

export function TableContextProvider({children}){
    const {state,dispatch}=React.useReducer(reducer,initState);

    const handleSubmit=()=>{
        fetch("http://localhost:3001/users",{
            method:"POST",
            body:JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.join())
        .catch((error)=>console.log(error));
    }
    const {country,city,population}=state;
    return (
        <TableContext.Provider
        value={{
            country,
            city,
            population,
            dispatch,
            handleSubmit
        }}
        >
            {children}
        </TableContext.Provider>
    )
}