import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button } from "@mui/material";
import { styled } from "@mui/system";


export const HeroWrapper = styled("div")({
  width: "54vw",
  height: "100%",
  backgroundColor: "#1e211f",
  borderRight: "1px solid rgba(255, 255, 255, 0.3)",
  borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});


export const Navbar = styled("div")({
  width: "100%",
  height: "10vh",
  backgroundColor: "white",
  background: "rgba(30, 33, 31, 0.7)",
  padding: "20px",
  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  color: "white",
  zIndex: 1,
});

export const NavContent = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const NavButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "transparent",
  padding: "5px",
  border: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: "#1e211f",
    backgroundColor: "white",
    opacity: "0.8",
    borderRadius: "5px",
  },
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const InputBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#454a46",
  width: "95%",
  height: "8vh",
  margin: "15px",
  borderRadius: "10px",
  paddingLeft: "30px",
});

export const InputButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: "#1e211f",
    backgroundColor: "white",
    opacity: "0.8",
    borderRadius: "5px",
  },
});

export const RegenerateButton = styled(Button)({
  width: "150px",
  height: "fit-content",
  borderRadius: "10px",
  backgroundColor: "#454a46",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  transition: "all 0.3s ease",
  fontSize: "10px",
  "&:hover": {
    backgroundColor: "#454a46",
    color: "white",
    opacity: "0.5",
  },
});

export const MessagesWrapper = styled("div")({
  width: "100%",
  height: "60vh",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
});

export const Message = styled("div")({
  width: "90%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(128, 128, 128, 0.1)",
  margin: "5px",
  padding: "20px",
  borderRadius: "15px",
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.8)",
});

export const MessageContent = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "15px",
  width: "70%",
});

export const Image = styled(Avatar)({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "white",
  objectFit: "contain",
});

export const EditIcon = styled(Edit)({
  fontSize: "1rem",
  cursor: "pointer",
  color: "white",
  fontWeight: 'lighter',
  opacity: '0.5',
});
