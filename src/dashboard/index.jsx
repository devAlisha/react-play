import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import FlyNavBar from "./components/FlyNavbar";
import SideNavBar from "./components/SideNavBar";
import "./style/sideNavbar.scss";

const Dashboard = () => {
  return (
    <Grid container className="">
      <Grid className="sideNavbar min-h-screen" item xs={0} md={2}>
        <SideNavBar />
        <FlyNavBar />
      </Grid>
      <Grid item md={10} xs={12} className="bg-blue-400">
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default Dashboard;