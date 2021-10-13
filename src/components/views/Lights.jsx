import React from 'react';

import DashboardCard from '../DashboardCard/DashboardCard';
import lightEntities from '../../utils/ligtEntities';

import { Grid } from '@material-ui/core';

import { useStyles } from "../../utils/styles";
import Navigation from '../Navigation/Navigation';

function Lights() {
  const classes = useStyles();

  return (
      <>
      <Navigation />
      <Grid container rowSpacing={1} spacing={3} className={classes.grid}>
        {lightEntities.map((light, index) => {
          return(
            <Grid item xs={light.xsSizing} key={index}>
              <DashboardCard entity_id={light.entity_name} entity={light.label}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Lights
