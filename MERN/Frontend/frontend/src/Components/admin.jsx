import React from "react"

export const Admin=()=>{
    return(
        <div>
            <h1>ADMIN</h1>
             <form>
                <input type="email" id={"email"} placeholder="email"/>
                <input type="password" id={"password"} placeholder="password"/>
               
                <input type="submit" value="Save">Submit</input>
            </form>
        </div>
    )
}