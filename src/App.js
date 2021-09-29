import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/views/Login';
import { AuthProvider } from './utils/Auth';
import PrivateRoute from './utils/PrivateRoute';

import routes from './utils/routes';


// Styles
import { makeStyles } from '@mui/styles';
import Navigation from './components/Navigation/Navigation';

const useStyles = makeStyles({
  container: {
    display: "flex",
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            {routes.map((route, index) => {
              return(
                <PrivateRoute exact key={index} path={route.path} component={route.component}/>
              )
            })}
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthProvider > 
    </div>
  );
}

export default App;
