import React, { useEffect, useState } from 'react';
import { Paper, Typography, Icon } from '@material-ui/core';

import api from '../../utils/api';

import { useStyles } from "../../utils/styles";

function DashboardCard(props) {
  const entity_id = props.entity_id;

  const [entity, updateEntity] = useState("");
  const [loading, updateLoading] = useState({});

  const classes = useStyles();

  const dataOn = JSON.stringify({
    "state": "on"
  });


  function getEntities() {
    api.get(`/states/${entity_id}`)
      .then((response) => {
        updateEntity(response.data);
        // console.log(response.data)
        updateLoading(false);
      });
  };

  function handleSwitchchange(e) {

    api.post(`/state/${e.entity_id}`, dataOn)
  };

  useEffect(() => {
    setInterval(() => getEntities(), 1000);
  }, [entity_id]);

  return loading ? (
  <Typography variant='body1'>Loading entity {entity_id}</Typography>
  ) : (
  <div>
    <Paper elevation={3} className={classes.paper}>
      <Typography variant='h2' className={classes.paperTypography}>{entity.attributes.friendly_name}</Typography>
      <Icon>{entity_id.icon}</Icon>
      <Typography variant='body1'>{entity.state}</Typography>
    </Paper>
  </div>
);
};

export default DashboardCard;
