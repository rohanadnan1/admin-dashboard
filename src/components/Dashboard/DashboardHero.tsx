import {
  Box,
  ChartBox,
  DashHeroWrapper,
} from "../../mui-components/Dashboard/SectionsStyles";
import {  Box as Div } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {  Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Navbar from "../Chats/Navbar";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

let arr = [];

// using a for loop to generate random data for the line chart

for (let i = 0; i < 12; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

const lineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: arr,
      fill: false,
      backgroundColor: "#1A1C1B",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
    },
  ],
};

export default function Hero() {
  return (
      <DashHeroWrapper>
      <Navbar text="Dashboard" width="76vw" />
        <Div
          sx={{
            backgroundColor: "transparent",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Box sx={{ overflow: "hidden", position: "relative" }}>
            <Div
              sx={{
                height: "100%",
                backgroundColor: "black",
                opacity: "0.2",
                borderRadius: "70%",
                width: "150px",
                left: "-70px",
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon
                sx={{ fontSize: "30px", color: "white", mr: "30px" }}
              />
            </Div>
            <h4
              style={{
                fontSize: "30px",
                position: "absolute",
                bottom: 10,
                right: 20,
                fontWeight: "bolder",
                color: "white",
                opacity: 0.6,
              }}
            >
              {"Cart"}
            </h4>
          </Box>
          <Box sx={{ overflow: "hidden", position: "relative" }}>
            <Div
              sx={{
                height: "100%",
                backgroundColor: "black",
                opacity: "0.2",
                borderRadius: "70%",
                width: "150px",
                left: "-70px",
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <AttachMoneyIcon
                sx={{ fontSize: "40px", mr: "20px", color: "white" }}
              />
            </Div>
            <h4
              style={{
                fontSize: "30px",
                position: "absolute",
                bottom: 10,
                right: 20,
                fontWeight: "bolder",
                color: "white",
                opacity: 0.6,
              }}
            >
              {"Sales"}
            </h4>
          </Box>
        </Div>
        <Div sx={{ height: "50%", backgroundColor: "transparent" }}>
          <ChartBox sx={{ height: "100%" }}>
            <Line height={100} width={300} data={lineData} />
          </ChartBox>
        </Div>
      </DashHeroWrapper>
  );
}
