import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { logout } from "../../firebase";
import axios from 'axios';

const baseURL = "/api/"

function Home() {
  const [state, setState] = useState(null);
  const [error, setError] = useState("");
  const headers = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys',
    'content-type': 'application/json'
  };


  useEffect(() => {
    axios.get(`${baseURL}`, headers)
    .then((response) => {
      setState(response.data);
      console.log(state);
    }).catch(({ response }) => {
      console.log(response.data);
      // console.log(response.status);
      // console.log(response.headers);
    });
  }, []);


  if (error.response) {
    console.log("response ")
    console.log(error.response)

  } else if (error.request) {
    console.log("request ")
    console.log(error.request)

  } else if (error.message) {

    console.log("message " + error.message)

  }

  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={() => {logout()}}>Log out</Button>
    </div>
  )
}

export default Home
