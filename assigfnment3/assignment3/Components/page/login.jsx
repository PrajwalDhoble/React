import { React, useState } from "react";
import { Button, FormGroup, FormLabel, Input } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginError, loginSuccess } from "../Redux/Login/loginAction";

export const Login = () => {
  const registerSampleData = {
    name: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    description: "",
  };

  const loginSampleData = {
    username: "",
    password: "",
  };

  const [registeredUser, setregisteredUser] = useState(registerSampleData);
  const [loginUser, setloginUser] = useState(loginSampleData);
  const dispatch = useDispatch();

  const handleSignupChanges = (event) => {
    const { name, value } = event.target;

    setregisteredUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginChanges = (event) => {
    const { name, value } = event.target;

    setloginUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = () => {
    // console.log(registeredUser);
    axios
      .post(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        registeredUser,
      )
      .then((res) => {
        let { error, message } = res.data;

        if (error === true) {
          alert("ERROR! couldn't be able to register. TRY AGAIN");
        } else {
          alert(message);
        }
      });
  };

  const handleLoginSubmit = () => {
    axios
      .post("https://masai-api-mocker.herokuapp.com/auth/login", loginUser)
      .then((res) => {
        let { error, token } = res.data;

        if (error === true) {
          dispatch(loginError());
          alert("ERROR! Check username and password");
        } else {
          dispatch(loginSuccess(token));
        }
      });
  };

  let { name, username, email, password, mobile, description } = registeredUser;

  return (
    <div className="login_signup_div">
      <div className="signup-login-form">
        <h1>LOGN IN</h1>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <Input
            className="input-login-signup"
            type="text"
            placeholder="ENTER YOUR NAME HERE"
            defaultValue={name}
            name="name"
            onChange={(event) => handleSignupChanges(event)}
          />
          <FormLabel>Username</FormLabel>
          <Input
            className="input-login-signup"
            type="text"
            placeholder="ENTER YOUR USERNAME HERE"
            defaultValue={username}
            name="username"
            onChange={(event) => handleSignupChanges(event)}
          />
          <FormLabel>Email Id</FormLabel>
          <Input
            className="input-login-signup"
            type="email"
            placeholder="ENTER YOUR EMAIL HERE"
            defaultValue={email}
            name="email"
            onChange={(event) => handleSignupChanges(event)}
          />
          <FormLabel>Mobile Number</FormLabel>
          <Input
            className="input-login-signup"
            type="number"
            placeholder="ENTER YOUR MOBILE NUMBER HERE"
            defaultValue={mobile}
            name="mobile"
            onChange={(event) => handleSignupChanges(event)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            className="input-login-signup"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
            defaultValue={password}
            name="password"
            onChange={(event) => handleSignupChanges(event)}
          />
          <FormLabel>bio</FormLabel>
          <Input
            className="input-login-signup"
            type="text"
            placeholder="ENTER YOUR BIO HERE"
            defaultValue={description}
            name="description"
            onChange={(event) => handleSignupChanges(event)}
          />
          <Button
            style={{ marginTop: "20px" }}
            variant="outlined"
            onClick={() => handleSignupSubmit()}
          >
            SIGN UP
          </Button>
        </FormGroup>
      </div>
      <div className="signup-login-form">
        <h1>SIGN UP</h1>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <Input
            className="input-login-signup"
            type="text"
            placeholder="ENTER YOUR USERNAME HERE"
            defaultValue={""}
            name="username"
            onChange={(event) => handleLoginChanges(event)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            className="input-login-signup"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
            defaultValue={""}
            name="password"
            onChange={(event) => handleLoginChanges(event)}
          />
          <Button
            disabled={loginUser.username == "" && loginUser.password == ""}
            style={{ marginTop: "20px" }}
            variant="outlined"
            onClick={() => handleLoginSubmit()}
          >
            LOG IN
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};
