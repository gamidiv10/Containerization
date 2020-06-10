import React, {useState} from "react";
import { Button, TextField, Link } from "@material-ui/core";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import passwordHash from 'password-hash';


export const Register = () => {

    const [emailId, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const history = useHistory();

    const handleEmailId = (e) => {
        setEmail(e.target.value);
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(passwordHash.generate(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://register-y6nn3qcdoq-de.a.run.app/users/register', {
            emailId,
            password,
            firstName,
            lastName
        }).then(response => {
              history.push('/login')
              console.log(response);
            }).catch(
            error => console.log(error)
        );

    }

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/login');
    }

  return (
    <div>
      <h1>State Management</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <br />
        <br />
        <TextField
          variant="outlined"
          onChange={handleFirstName}
          color="secondary"
          type="text"
          placeholder="First Name"
        ></TextField>
        <br />
        <br />
        <TextField
          variant="outlined"
          onChange={handleLastName}
          color="secondary"
          type="text"
          placeholder="Last Name"
        ></TextField>
        <br />
        <br />
        <TextField
          variant="outlined"
          onChange={handleEmailId}
          color="secondary"
          type="text"
          placeholder="Email Id"
        ></TextField>
        <br />
        <br />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
          required
          variant="outlined"
          color="secondary"
        />
        <br />
        <br />
        <Button type="submit" color="primary" variant="outlined">
          Register
        </Button>
        <br />
        <br />
        <Link href="#" onClick={handleLogin} color="inherit">
          <label className="inputLabel">Already have an account? </label>
          Login
        </Link>
      </form>
    </div>
  );
};
