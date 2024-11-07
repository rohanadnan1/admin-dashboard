import { Box } from "@mui/material";
import SideNav from "./SideNav";
import Hero from "./DashboardHero";
import Reviews from "./Reviews";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#121212",
        width: "96vw",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SideNav />
        <Hero />
        <Reviews />
      </Box>
    </Box>
  );
};

export default Dashboard;
