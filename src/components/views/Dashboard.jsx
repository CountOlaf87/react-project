import { Grid } from '@material-ui/core';
import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import PersonHomeCard from '../PersonHomeCard/PersonHomeCard'
import { useStyles } from "../../utils/styles";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={4}>
          <PersonHomeCard entity_id={"device_tracker.olaf"}/>
        </Grid>
      </Grid>
    </>
  )
}
