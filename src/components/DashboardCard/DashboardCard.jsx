import React, { useEffect, useState } from 'react';
import { Paper, Typography, Icon, Switch } from '@material-ui/core';

import { getRequest } from '../../utils/api';

import { useStyles } from "../../utils/styles";

import {
  callService, subscribeEntities
} from "home-assistant-js-websocket";

import connection from '../../utils/websockets';

function DashboardCard(props) {
  const entity_id = props.entity_id;

  const [entity, updateEntity] = useState(true);
  const [loading, updateLoading] = useState({});
  const [checked, setChecked] = useState(false);

  const classes = useStyles();

  function updateState(ent){
    if(ent.state === 'on'){
      setChecked(true);
    }
  }
  
  // function getEntities() {
  //   api.get(`/states/${entity_id}`)
  //     .then((response) => {
  //       updateEntity(response.data);
  //       updateState(response.data);
  //       updateLoading(false);
  //     });
  // };

  async function fetchEntity(){
    try{
      const fetchedEntity = await getRequest(`states/${entity_id}`);
      updateEntity(fetchedEntity.data);
      updateLoading(false);
    } catch (error){
      console.log(error.message);
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
    setInterval(() => fetchEntity(), 2500);
  }, [entity_id]);

  return loading ? (
  <Typography variant='body1'>Loading entity {entity_id}</Typography>
  ) : (
  <div>
    <Paper elevation={3} className={classes.paper}>
      <Typography variant='h2' className={classes.paperTypography}>{entity.attributes.friendly_name}</Typography>
      <Icon>{entity_id.icon}</Icon>
      <Typography variant='body1'>{entity.state}</Typography>
          <Switch
            checked={checked}
            onChange={() => handleSwitchchange(entity_id)}
            name={(entity_id)}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
    </Paper>
  </div>
);
};

export default DashboardCard;
