import React from "react"

export const Classes=()=>{
       return(
           <div>
               <form>
                <input type="text" id={"name"} placeholder="name"/>
                <input type="text" id={"grade"} placeholder="grade"/>
                <input type="text" id={"section"} placeholder="section"/>
                <input type="text" id={"subject"} placeholder="subject"/>
                <input type="submit" value="Save">Add</input>
            </form>
           </div>
       )
}