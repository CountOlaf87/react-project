import { Grid } from '@material-ui/core';
import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import PersonHomeCard from '../PersonHomeCard/PersonHomeCard'
import { useStyles } from "../../utils/styles";
import dashboardLightEntities from '../../utils/lightEntities_dashboard';
import DashboardCard from '../DashboardCard/DashboardCard';
import Navigation from '../Navigation/Navigation';

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
    <Navigation />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={4}>
          <PersonHomeCard entity_id={"device_tracker.olaf"}/>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          {dashboardLightEntities.map((light, index) => {
            return (
              <Grid item xs={light.xsSizing} key={index}>
                <DashboardCard entity_id={light.entity_name} entity={light.label} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}
