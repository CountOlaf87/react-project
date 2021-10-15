import { Paper } from '@material-ui/core';
import { CircleLoader } from 'react-spinners'
import { useStyles } from '../../utils/styles';

function LoadingComponent() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.loading}>
          <CircleLoader />
        </div>
      </Paper>
    </div>
  )
}

export default LoadingComponent
