import { Grid } from '@material-ui/core';
import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { useStyles } from "../../utils/styles";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.grid}>
        <WeatherCard />
      </Grid>
    </>
  )
}
