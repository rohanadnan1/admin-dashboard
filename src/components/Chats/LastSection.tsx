import {
  LastSectionWrapper,
  TopBox as TP,
  BoxWrapper,
  Box as B,
  LastBox,
} from "../../mui-components/Chats/LastSectionStyles";
// import { TopBox } from "../mui-components/ChatsStyles";
import { Close, MoreHoriz } from "@mui/icons-material";
import {
  HeadingContainer,
  HeadingContent,
} from "../../mui-components/Chats/MainStyles";
import {  Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let data = [];
for (let i = 0; i < 2; i++) {
  data.push(Math.floor(Math.random() * 100));
}

const doughnutData = {
  labels: ["Average Reply Time", "Average Generation Time"],
  datasets: [
    {
      data,
      backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const LastSection = () => {
  return (
    <LastSectionWrapper>
      <TP>
        <Close
          sx={{
            textAlign: "end",
            cursor: "pointer",
          }}
        />
      </TP>
      <HeadingContainer>
        <HeadingContent>
          <h4
            style={{
              fontWeight: "lighter",
            }}
          >
            Capabillities
          </h4>
        </HeadingContent>
        <MoreHoriz />
      </HeadingContainer>
      <BoxWrapper>
        <B></B>
        <B></B>
      </BoxWrapper>
      <HeadingContainer>
        <HeadingContent>
          <h4
            style={{
              fontWeight: "lighter",
            }}
          >
            Limitations
          </h4>
        </HeadingContent>
        <MoreHoriz />
      </HeadingContainer>
      <BoxWrapper>
        <B></B>
        <B></B>
      </BoxWrapper>
      <LastBox>
        <Doughnut data={doughnutData} height={300} width={400} />
      </LastBox>
    </LastSectionWrapper>
  );
};

export default LastSection;
