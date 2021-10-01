import React, { useEffect, useState } from 'react';
import { Paper, Typography, Switch } from '@material-ui/core';

import api from '../../utils/api';
import socket from '../../utils/websockets';

import { useStyles } from "../../utils/styles";

const useFetchEntityDetail = entity_id => {
  const [entity, updateEntity] = useState("");
  const [loading, updateLoading] = useState({});
  const [switchState, updateSwitchState] = useState(false);
  
  // useEffect(() => {
  //   socket.on({
  //     'id': 1,
  //     'type': 'subscribe_events', 
  //     'event_type': 'state_changed'}, ({response}) => {
  //       updateEntity(response.data);
  //   })
  //   socket.on("connect_error", (err) =>{
  //     console.log('Connection error due to ' + err.message)
  //   })
  // })
  //   useEffect(() => {
  //     api.get(`/states/${entity_id}`)
  //     .then((response) => {
  //       updateEntity(response.data);
  //       console.log(response.data)
  //       updateLoading(false);
  //     });
  //   }, [entity_id]);
  //   return {
  //     loading, entity
  //   };
  // };

  function getEntities(){
    api.get(`/states/${entity_id}`)
      .then((response) => {
        updateEntity(response.data);
        convertChecked(response.data.state)
        // console.log(response.data)
        updateLoading(false);
      });
  };

  function convertChecked(entityState) {
    // console.log(entityState)
    if (entityState === 'on') {
      updateSwitchState(true);
    } else {
      updateSwitchState(false);
    }
  }

  useEffect(() => {
    setInterval(() => getEntities(), 1000);
  }, [entity_id]);
  return {
    loading, entity
  };
};


function DashboardCard(props) {
  const classes = useStyles();
  const entity_id = props.entity_id;
  const {loading, entity} = useFetchEntityDetail(entity_id);

  function handleSwitchchange(e) {
    console.log('switched' + e);
  };

  return loading ? (
    <Typography variant='body1'>Loading entity {entity_id}</Typography>
  ) : (
    <div>
      <Paper elevation={3} className={classes.paper}>
          <Typography variant='h2' className={classes.paperTypography}>{entity.attributes.friendly_name}</Typography>
          <Switch
            checked={switchState}
            onChange={() => { handleSwitchchange(entity_id)}}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Typography variant='body1'>{entity.state}</Typography>
      </Paper>
    </div>
  );
};

export default DashboardCard
