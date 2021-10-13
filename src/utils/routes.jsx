import Dashboard from "../components/views/Dashboard";
import Lights from "../components/views/Lights";


const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: "DashboardOutlinedIcon",
    activeIcon: "DashboardIcon",
    component: Dashboard,
  },
  {
    label: "Lights",
    path: "/lights",
    activeIcon: "EmojiObjectsIcon",
    icon: "EmojiObjectsOutlinedIcon",
    component: Lights,
  },
];

export default routes;