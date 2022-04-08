import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";
// import { use } from "express/lib/router";

export const Page1 = () => {
    const { name, age, dob, dispatch } = React.useContext(RegistrationContext);
    const navigate = useNavigate();

    return (
        <div>
            <input
                placeholder="name"
                type="text"
                value={name}
                onChange={(e) =>
                    dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                }>
            </input>
            <input
                placeholder="age"
                type="text"
                value={age}
                onChange={(e) =>
                    dispatch({ type: "CHANGE_AGE", payload: e.target.value })
                }>
            </input>
            <input
                placeholder="Date of Birth"
                type="date"
                value={dob}
                onChange={(e) =>
                    dispatch({ type: "CHANGE_DOB", payload: e.target.value })
                }>
            </input>

            <button
                disabled={name.length == 0 && age.length == 0 && !dob}
                onClick={() => {
                    navigate("/registration/two");
                }}
            >Next</button>
        </div>
    )
}