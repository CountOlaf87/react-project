import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    onAuthStateChanged(getAuth(),(user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <LoadingComponent />
        </Grid>
      </Grid>
    </>
  }

  return (
    <AuthContext.Provider
    value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  );
}

