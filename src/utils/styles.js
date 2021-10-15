import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
  appRoot: {
    display: "flex",
  },
  appBar: {
    display: "none",
    background: "#6EC177",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBarSpacer: {
    [theme.breakpoints.down("xs")]: {
      ...theme.mixins.toolbar,
    },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  drawer: {
    width: "100"
  },
  grid: {
    width: '100%',
    margin: '0px',
    // padding: '15px'
  },
  navigationLogo: {
    width: "20%",
    cursor: "pointer",
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
  },
  navigationDrawer: {
    width: 240,
    border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  navigationSpacer: {
    flex: 1,
  },
  menuItemIcon: {
    width: "100%",
  },
  menuItem: {
    width: "80%",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuItemActive: {
    backgroundColor: "#EBEBEC",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    minHeight: theme.spacing(6),
  },
  paperTypography: {
    fontSize: '1.2em',
    fontWeight: '500',
    paddingBottom: '1rem'
  },
  loading: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },
  }
})
