import React from "react";

export const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3002/users")
            .then((res) => res.json())
            .then((res) => setUsers(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <table style={{ border: "1px solid black" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black" }}>Name</th>
                    <th style={{ border: "1px solid black" }}>Age</th>
                    <th style={{ border: "1px solid black" }}>Date of Birth</th>
                    <th style={{ border: "1px solid black" }}>State</th>
                    <th style={{ border: "1px solid black" }}>Address</th>
                    <th style={{ border: "1px solid black" }}>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td style={{ border: "1px solid black" }}>{user.name}</td>
                        <td style={{ border: "1px solid black" }}>{user.age}</td>
                        <td style={{ border: "1px solid black" }}>{user.dob}</td>
                        <td style={{ border: "1px solid black" }}>{user.rstate}</td>
                        <td style={{ border: "1px solid black" }}>{user.address}</td>
                        <td style={{ border: "1px solid black" }}>{user.pincode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}