import { useEffect, useState } from "react";
import axios from "axios";

export const AddCountry =()=>{
    const [country,setCountry] = useState("")

    let API = `http://localhost:3002/country`;

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${API}`,{name:country}).then(()=>{
            alert(`${country} added`);
        });
    };

    return(
        <div>
            <h1>Add Country</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Add Country</label>
            <input type="text" id={"country"} value={country.name} onChange={(e)=>setCountry(e.target.value)}></input>
            <input type="submit" value={"Enter"}></input>
        </form>
        </div>
    )
}