// external
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../utils/firebase";

import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// internal
import { useStyles } from "../../utils/styles";

const MenuItem = ({ label, icon, activeIcon, path, onClick }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  const ActiveIcon = activeIcon;
  const NormalIcon = icon;

  useEffect(() => {
    if (path === "/sign-out") {
      setActive(true);
      return;
    }
    setActive(location.pathname === path);
  }, [location, path]);
  console.log(ActiveIcon)
  return (
    <ListItem
      button
      component={Link}
      to={path}
      className={clsx(classes.menuItem, active && classes.menuItemActive)}
      onClick={onClick}
    >
      <ListItemIcon>
        {/* {active 
          ? <ActiveIcon />
          : <NormalIcon />
      } */}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  );
};

export default MenuItem;