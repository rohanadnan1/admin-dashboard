// Desc: Styles for the UserEdits component

import styled from "@emotion/styled";
import { TextareaAutosize } from "@mui/material";

export const UserEditWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "96vw",
  backgroundColor: "black ",
});

export const UserEditContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "90vh",
  width: "90vw",
  backgroundColor: "#454A45",
  padding: "20px",
  borderRadius: "20px",
  gap: "30px",
});

export const UserImage = styled("img")({
  height: "150px",
  width: "150px",
  borderRadius: "50%",
  backgroundColor: "transparent",
});

export const StyledTextArea = styled(TextareaAutosize)({
  fontSize: "20px",
  color: "white",
  border: "1px solid white",
  padding: "10px",
  borderRadius: "10px",
  width: "40%",
  outline: "none",
  backgroundColor: "transparent",
  "&::placeholder": { opacity: "0.4", color: "white" },
});
