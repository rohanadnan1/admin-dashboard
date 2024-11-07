// Desc: Styles for the Main component

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const MainContainer = styled("div")({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  backgroundColor: "black",
  justifyContent: "flex-start",
});

export const HeadingContainer = styled(Box)({
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  color: "white",
});

export const HeadingContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2 px",
});
