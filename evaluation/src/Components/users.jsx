import React from "react";

export const Users=()=>{
    const [users,setUsers]=React.useState([]);

    React.useEffect(()=>{
      fetch("http://localhost:3001/users")
      .then((res)=>res.json())
      .then((res)=>setUsers(res))
      .catch((err)=>console.log(err))
    },[]);


return (
    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>City</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>
           { users.map((user)=>(
                <tr>
                    <td>{user.country}</td>
                    <td>{user.city}</td>
                    <td>{user.population}</td>
                </tr>
            ))
           }
        </tbody>
    </table>
)
        }