import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Chats/Navbar";
import SideNav from "./SideNav";
import Hero from "./DashboardHero";
import Reviews from "./Reviews";

const Dashboard = () => {
  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#121212", width: "96vw", flexDirection:'column', overflow:'hidden' }}
    >
      {/* <Sidebar /> */}
      {/* <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Header />
        <StatsCards />
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} md={8}>
            <RevenueChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomerList />
          </Grid>
        </Grid>
      </Box> */}
      {/* <Navbar text='Dashboard' /> */}
      <Box sx={{display: 'flex', height: '100vh'}}>
        <SideNav/>
        {/* <Navbar text='Dashboard'/> */}
        <Hero/>
        <Reviews/>
      </Box>
    </Box>
  );
};

export default Dashboard;
