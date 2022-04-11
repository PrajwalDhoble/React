import { React, useState } from "react";
import { Button, FormGroup, FormLabel, Input } from "@mui/material";
import { v4 as uuid } from "uuid";
import axios from "axios";

export const Login = () => {
  return (
    <div className="login_signup_div">
      <div className="signup-login-form">
        <h1>LOGN IN</h1>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <Input
            className="input-login-signup"
            type="text"
            placeholder="ENTER YOUR USERNAME HERE"
          />
          <FormLabel>Email Id</FormLabel>
          <Input
            className="input-login-signup"
            type="email"
            placeholder="ENTER YOUR EMAIL HERE"
          />
          <FormLabel>Date Of Birth</FormLabel>
          <Input className="input-login-signup" type="date" />
          <FormLabel>Password</FormLabel>
          <Input
            className="input-login-signup"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
          <Button
            style={{ marginTop: "20px" }}
            variant="outlined"
            onClick={() => alert("Hello")}
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
          />
          <FormLabel>Password</FormLabel>
          <Input
            className="input-login-signup"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
          <Button style={{ marginTop: "20px" }} variant="outlined">
            LOG IN
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};
