import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const State = () => {

    const [activeUsers, setActiveUsers] = useState(null);
    useEffect(() => {
        axios
        .get(`http://localhost:8080/users/`)
        .then((response) => {
        
            setActiveUsers(response.data.data);
            // console.log(activeUsers);
        })
        .catch((error) => console.log(error.message));
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  const history = useHistory();


  const handleLogout = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div>
        {/* <p>{activeUsers}</p> */}
        <Button onClick={handleLogout} color="primary" variant="outlined">
          Logout
        </Button>   
    </div>
  );
};
