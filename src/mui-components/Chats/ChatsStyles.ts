"use client";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const ChatsWrapper = styled("div")({
  width: "20vw",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#1e211f",
  color: "white",
});

export const TopBox = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const InsideTopBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const InputBox = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#454a46",
  padding: "5px",
  borderRadius: "5px",
  gap: "40px",
});

export const ChatsBoxWrapper = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "transparent",
});

export const ChatsBox = styled("div")({
  width: "90%",
  height: "20px",
  display: "flex",
  backgroundColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "all 0.5s ease",
  margin: "5px",
  padding: "15px",
  "&:hover": {
    backgroundColor: "#454a46",
    borderRadius: "5px",
    cursor: "pointer",
  },
});

export const ChatsHeading = styled("p")({
  color: "white",
  fontSize: "10px",
  opacity: "0.7",
  textAlign: "left",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
});

export const ClearChatButton = styled(Button)({
  width: "90%",
  height: "fit-content",
  padding: "10px",
  marginTop: "45px",
  backgroundColor: "#454a46",
  borderRadius: "10px",
  border: "1px solid black",
  color: "white",
  fontSize: "10px",
  transition: "0.5s ease-in-out",
  "&:hover": {
    backgroundColor: "#1e211f",
    color: "white",
    border: "1px solid white",
  },
});

export const InputWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
