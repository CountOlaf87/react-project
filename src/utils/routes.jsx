

import Dashboard from "../components/views/Dashboard";
import Lights from "../components/views/Lights";
import Home from "../components/views/Home";


const routes = [
  {
    label: "Dashboard",
    path: "/",
    Icon: "DashboardOutlinedIcon",
    ActiveIcon: "DashboardIcon",
    component: Dashboard,
  },
  {
    label: "Lights",
    path: "/lights",
    Icon: "DashboardOutlinedIcon",
    ActiveIcon: "DashboardIcon",
    component: Lights,
  },
  {
    label: "Home",
    path: "/home",
    Icon: "DashboardOutlinedIcon",
    ActiveIcon: "DashboardIcon",
    component: Home,
  },
  {
    label: "Sign Out",
    path: "/sign-out",
    Icon: "ExitToAppIcon",
    ActiveIcon: "ExitToAppIcon",
  },

];

export default routes;