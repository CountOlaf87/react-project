import Dashboard from "../components/views/Dashboard";
import Lights from "../components/views/Lights";


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
];

export default routes;