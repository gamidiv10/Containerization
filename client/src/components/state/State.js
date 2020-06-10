import React, { useEffect, useState } from "react";
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const State = () => {

    const location = useLocation();
    // console.log("emailId", location.state);

    const [activeUsers, setActiveUsers] = useState([]);
    useEffect(() => {
        axios
        .get(`https://stateinfo-y6nn3qcdoq-de.a.run.app/users/`)
        .then((response) => {
            setActiveUsers(response.data.data);
        })
        .catch((error) => console.log(error.message));
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
        const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    const emailId = location.state;
    axios
    .get(`https://stateinfo-y6nn3qcdoq-de.a.run.app/users/loggedOut/${emailId}`)
    .then((res) => {
      console.log(res);
    }).catch((error) => console.log(error));
        
    history.push("/login");
  };


  return (
    <div>
      <h3 style={ { marginLeft: "40%", width: "20%", marginTop: "5%"}}>You are Online. The other online users are listed below</h3>
      <Table style={ { width: "20%", marginTop: "5%", marginLeft: "40%", marginRight: "40%" }}>
  <TableHead>
    <TableRow> 
      <TableCell style={ { textAlign: "center" }} scope="col"><b>User</b></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {activeUsers.filter((obj) => obj.email_id !== location.state).map((user, index) => (
                  <TableRow key={index}>
                    <TableCell style={ { textAlign: "center" }}>{user.email_id}</TableCell>
                  </TableRow>
                ))}
  </TableBody>
  </Table>
        <Button onClick={handleLogout} style={ { marginTop: "10%" }} color="primary" variant="outlined">
          Logout
        </Button>   
    </div>
  );
};
