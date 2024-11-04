import {
  Navbar as Nav,
  NavContent,
  NavButton,
  ButtonsContainer,
} from "../../mui-components/Chats/HeroStyles";
import {
  DeleteTwoTone,
  CommentBankTwoTone,
  Analytics,
} from "@mui/icons-material";
import MapsUgcTwoToneIcon from "@mui/icons-material/MapsUgcTwoTone";
import { useLocation } from "react-router";
import PersonIcon from "@mui/icons-material/Person";

interface NavbarProps {
  text: string;
  width?: string;
}

const Navbar: React.FC<NavbarProps> = ({ text, width }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isChats = location.pathname === "/chats";
  const isUserManagement = location.pathname === "/user-management";


  return (
    <Nav sx={{ width: width, position: "relative" }}>
      <NavContent>
        <h3
          style={{
            fontWeight: "lighter",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {isChats ? (
            <MapsUgcTwoToneIcon />
          ) : isDashboard ? (
            <Analytics />
          ) : isUserManagement ? (
            <PersonIcon />
          ) : null}
          {text}
        </h3>
        <ButtonsContainer>
          <NavButton >
            <DeleteTwoTone />
          </NavButton>
          <NavButton>
            <CommentBankTwoTone />
          </NavButton>
        </ButtonsContainer>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
