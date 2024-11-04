import {  Stack } from "@mui/material";
import { styled } from "@mui/system";

export const SidebarWrapper = styled(Stack)({
  width: "4vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "black",
});

export const Box1 = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "100px",
});

export const Box2 = styled("div")({
  width: "100%",
  height: "20%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
});

export const LogoContainer = styled("div")({
  width: "70%",
  borderRadius: "50%",
  padding: "8px",
  backgroundColor: "yellow",
  marginTop: "10px",
});

export const SidebarButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  cursor: "pointer",
  border: "none",
  height: "35px",
  width: "45px",
  backgroundColor: "transparent",
  color: "white",
  transition: "0.3s ease-in-out",
  outline: 'none',
  "&:hover": {
    backgroundColor: "blue",
    opacity: "0.8",
  },
  margin: "5px",
  '&:focus': {
    outline: 'none'
  }
});
