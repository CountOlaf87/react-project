import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { logout } from "../../utils/firebase";
import connection from '../../utils/websockets';
import { subscribeEntities } from "home-assistant-js-websocket";
import Navigation from '../Navigation/Navigation';



function Home() {
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   connection.then(conn => {
  //     subscribeEntities(conn, (ent) =>
  //       console.log(ent)
  //     )
  //   })
  // }, []);

  

  

  return (
    <div>
      <Navigation />
      <h1>Mancave Light</h1>
      <p>{state.state}</p>
      <Button variant="contained" onClick={() => {logout()}}>Log out</Button>
    </div>
  )
}

export default Home
