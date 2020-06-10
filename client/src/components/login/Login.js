import React, { useState } from "react";
import { Button, TextField, Link } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import passwordHash from "password-hash";

export const Login = () => {
  const [emailId, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleEmailId = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://login-y6nn3qcdoq-de.a.run.app/users/${emailId}`)
      .then((response) => {
        let passwordVerified = passwordHash.verify(
          password,
          response.data.data
        );
        console.log(passwordVerified)
        if (passwordVerified) {
          axios
            .get(`https://login-y6nn3qcdoq-de.a.run.app/users/loggedIn/${emailId}`)
            .then((res) => {
              console.log(res);
              history.push("/home", emailId);
            })
            .catch((error) => console.log(error));
        }
        else{
        console.log("Incorrect Password");
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div>
      <h1>State Management</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          onChange={handleEmailId}
          color="secondary"
          defaultValue="vamsi.gamidi01@gmail.com"
          type="text"
          placeholder="Email Id"
        ></TextField>
        <br />
        <br />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="password"
          onChange={handlePassword}
          required
          variant="outlined"
          color="secondary"
        />
        <br />
        <br />
        <Button type="submit" color="primary" variant="outlined">
          Login
        </Button>
        <br />
        <br />
        <Link href="#" onClick={handleRegister} color="inherit">
          <label className="inputLabel">Don't have an account? </label>
          Register
        </Link>
      </form>
    </div>
  );
};
