import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Dashboard from "../components/views/Dashboard";
import Lights from "../components/views/Lights";


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
    label: "Sign Out",
    path: "/sign-out",
    icon: ExitToAppIcon,
    activeIcon: ExitToAppIcon,
  },

];

export default routes;