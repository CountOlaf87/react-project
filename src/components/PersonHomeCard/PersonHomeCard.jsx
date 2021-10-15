import React, { useEffect, useState } from 'react';

import { Paper, Typography } from '@material-ui/core';

import { getRequest } from '../../utils/api';

import { useStyles } from "../../utils/styles";
import LoadingComponent from '../LoadingComponent/LoadingComponent';

function PersonHomeCard(props) {
  const [person, updatePerson] = useState({});
  const [loading, updateLoading] = useState({});

  const entity_id = props.entity_id;

  const classes = useStyles();
  const [error, setError] = useState(false);

  async function fetchEntity() {
    try {
      const fetchedEntity = await getRequest(`/states/${entity_id}`);
      updatePerson(fetchedEntity.data);
      updateLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEntity();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <Typography variant='body1'>An error has occured.</Typography>
  } else {
    return loading ? (
      <LoadingComponent />
    ) : (
      <div>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h2' className={classes.paperTypography}>
            Olaf is
          </Typography>
          <Typography variant='h2' className={classes.paperTypography}>
            {person.state === 'home' ? "Home" : "Not home"}
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default PersonHomeCard
