import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuth(),(user) => {
      setCurrentUser(user)
      setPending(false)
      console.log(user)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
    value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  );
}

