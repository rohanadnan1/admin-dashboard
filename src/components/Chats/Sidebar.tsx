import {
  SidebarWrapper,
  Box1,
  Box2,
  LogoContainer,
  SidebarButton,
} from "../../mui-components/Chats/SidebarStyles";
import { Stack, Tooltip } from "@mui/material";
import { InsertComment, Home, WbSunny, Logout } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { fetchData } from "../../store/slices/usersSlice";

const Sidebar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isChats = location.pathname === "/chats";
  const isUserManagement = location.pathname === "/user-management";
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userSession"); // session is deleted and user redirected to login page
    navigation("/login");
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <SidebarWrapper alignSelf="baseline">
      <Box1>
        <LogoContainer>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src="https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png"
            alt="logo"
          />
        </LogoContainer>
        <Stack>
          <Tooltip title="User Management" placement="right-start">
            <SidebarButton
              onClick={() => navigation("/user-management")}
              sx={
                isUserManagement
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "transparent" }
              }
            >
              <PersonIcon
                sx={{
                  fontSize: "medium",
                  opacity: "0.7",
                }}
              />
            </SidebarButton>
          </Tooltip>
          <Tooltip title="Chats" placement="right">
            <SidebarButton
              onClick={() => navigation("/chats")}
              sx={
                isChats
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "transparent" }
              }
            >
              <InsertComment
                sx={{
                  fontSize: "medium",
                  opacity: "0.7",
                }}
              />
            </SidebarButton>
          </Tooltip>
          <Tooltip title="Dashboard" placement="right-end">
            <SidebarButton
              onClick={() => navigation("/dashboard")}
              sx={
                isDashboard
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "transparent" }
              }
            >
              <Home
                sx={{
                  fontSize: "medium",
                  opacity: "0.7",
                }}
              />
            </SidebarButton>
          </Tooltip>
        </Stack>
      </Box1>
      <Box2>
        <WbSunny
          sx={{
            color: "yellow",
          }}
        />
        <Tooltip title="Logout" placement="right">
          <SidebarButton onClick={handleLogout}>
            <Logout
              sx={{
                opacity: "0.8",
              }}
            />
          </SidebarButton>
        </Tooltip>
      </Box2>
    </SidebarWrapper>
  );
};

export default Sidebar;
