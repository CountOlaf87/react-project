import React from 'react';
import Button from '@material-ui/core/Button';
import { logout } from "../../firebase";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={() => {logout()}}>Log out</Button>
    </div>
  )
}

export default Home
