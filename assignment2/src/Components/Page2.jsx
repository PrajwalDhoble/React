import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";

export const Page2 = () => {
    const {
        dispatch,
        rstate,
        address,
        pincode,
        name,
        age,
        dob,
        handleSubmit
    } = React.useContext(RegistrationContext);

    if (name.length == 0 || age.length == 0 || !dob) {
        return <Navigate to="/registration/one"></Navigate>
    }
    return (
        <div>
            <input
                placeholder="state"
                type="text"
                value={rstate}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE_RSTATE",
                        payload: e.target.value
                    })
                }
            ></input>
            <input
                placeholder="address"
                type="text"
                value={address}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE_ADDRESS",
                        payload: e.target.value
                    })
                }
            ></input>
            <input
                placeholder="pincode"
                type="text"
                value={pincode}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE_PINCODE",
                        payload: e.target.value
                    })
                }
            ></input>
            <button
                disabled={
                    rstate.length == 0 || address.length == 0 || pincode.length == 0 || name.length == 0 || age.length == 0 || !dob
                }
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}