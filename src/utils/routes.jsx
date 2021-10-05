import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Dashboard from "../components/views/Dashboard";
import Lights from "../components/views/Lights";
import Home from "../components/views/Home";


const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: DashboardOutlinedIcon,
    activeIcon: DashboardIcon,
    component: Dashboard,
  },
  {
    label: "Lights",
    path: "/lights",
    icon: DashboardOutlinedIcon,
    activeIcon: DashboardIcon,
    component: Lights,
  },
  {
    label: "Home",
    path: "/home",
    icon: DashboardOutlinedIcon,
    activeIcon: DashboardIcon,
    component: Home,
  },
  {
    label: "Sign Out",
    path: "/sign-out",
    icon: ExitToAppIcon,
    activeIcon: ExitToAppIcon,
  },

];

export default routes;