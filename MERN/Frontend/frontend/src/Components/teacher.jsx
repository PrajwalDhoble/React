import React from "react"


export const Teacher=()=>{
    return(
        <div>
            <form>
                <input type="text" id={"name"} placeholder="name"/>
                <input type="text" id={"age"} placeholder="age"/>
                <select name="" id={"gender"} >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="submit" value="Save">Add</input>
            </form>
        </div>
    )
}