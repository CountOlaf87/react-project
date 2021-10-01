import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { logout } from "../../utils/firebase";
import axios from 'axios';

const baseURL = "/api/states/light.hue_color_candle_3"
const dataOn  = JSON.stringify({
  "state": "on"
});
const dataOff  = JSON.stringify({
  "state": "off"
});

const headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys',
  'content-type': 'application/json'
}
function Home() {
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get(baseURL, {
      headers: headers
    })
    .then((response) => {
      setState(response.data);
      // console.log(response.data);
    }).catch(({ response }) => {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.headers);
    });
  }, []);

  function turnOn(){
    axios.post(baseURL, dataOn, {
      headers: headers
    }).then((response) => {
      setState(response.data);
    })
  }
  function turnOff(){
    axios.post(baseURL, dataOff, {
      headers: headers
    }).then((response) => {
      setState(response.data);
    })
  }

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
      <h1>Mancave Light</h1>
      <p>{state.state}</p>
      <Button variant="contained" onClick={turnOn}>Turn On</Button>
      <Button variant="contained" onClick={turnOff}>Turn Off</Button>
      <Button variant="contained" onClick={() => {logout()}}>Log out</Button>
    </div>
  )
}

export default Home
