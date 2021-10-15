import React, { useEffect, useState } from 'react';
import { Paper, Typography, Icon, Switch } from '@material-ui/core';

import { getRequest } from '../../utils/api';

import { useStyles } from "../../utils/styles";

import { callService } from "home-assistant-js-websocket";

import connection from '../../utils/websockets';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

function DashboardCard(props) {
  const entity_id = props.entity_id;

  const [entity, updateEntity] = useState(true);
  const [loading, updateLoading] = useState({});
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState(false);

  const classes = useStyles();

  function updateState(ent){
    if(ent.state === 'on'){
      setChecked(true);
    }else{
      setChecked(false);
    }
  }

  async function fetchEntity(){
    try{
      const fetchedEntity = await getRequest(`states/${entity_id}`);
      updateEntity(fetchedEntity.data);
      updateState(fetchedEntity.data);
      updateLoading(false);
    } catch (err){
      setErrors(true);
    }
  }

  function handleSwitchchange(entId) {
    connection.then(conn => {
      callService(conn, "homeassistant", "toggle", {
        entity_id: entId,
      })
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEntity();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if(errors){
    return <Typography variant='body1'>An error has occured.</Typography>
  }else{
  return loading ? (
  <LoadingComponent />
  ) : (
  <>
    <Paper elevation={3} className={classes.paper}>
      <Typography variant='h2' className={classes.paperTypography}>{props.entity}</Typography>
      <Icon>{entity_id.icon}</Icon>
      <Typography variant='body1'>{entity.state}</Typography>
          <Switch
            checked={checked}
            onChange={() => handleSwitchchange(entity_id)}
            name={(entity_id)}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
    </Paper>
  </>
    )
  };
};

export default DashboardCard;
