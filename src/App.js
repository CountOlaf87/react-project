import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/views/Login';
import { AuthProvider } from './utils/Auth';
import PrivateRoute from './utils/PrivateRoute';

import routes from './utils/routes';


// Styles
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';

import { logout } from './utils/firebase';


const useStyles = makeStyles({
  container: {
    display: "flex",
  },
}, {index: 1});

function App() {
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <div className={classes.container}>
        <AuthProvider>
          <Router>
            {/* <Navigation /> */}
            <Switch>
              {routes.map((route, index) => {
                if (route.path === "/sign-out") { 
                  logout();
                  <Route exact path="/login" component={Login} />
                }
                return(
                  <PrivateRoute exact key={index} path={route.path} component={route.component}/>
                )
              })}
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AuthProvider > 
      </div>
    </StylesProvider>
  );
}

export default App;
