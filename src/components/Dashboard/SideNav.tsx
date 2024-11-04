import { MoreHoriz, RateReview, Search } from "@mui/icons-material";
import {
  InputBox,
  InsideTopBox,
  TopBox,
} from "../../mui-components/Chats/ChatsStyles";
import {
  HeadingContainer,
  HeadingContent,
} from "../../mui-components/Chats/MainStyles";
import { SideNavWrapper } from "../../mui-components/Dashboard/SideNavStyles";
import DropDown from "./DropDown";
import { Box, InputBase } from "@mui/material";
import { SidebarButton } from "../../mui-components/Chats/SidebarStyles";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <TopBox>
        <InsideTopBox>
          <HeadingContainer>
            <HeadingContent>
              <h4
                style={{
                  fontWeight: "lighter",
                }}
              >
                Sales
              </h4>
              <h4
                style={{
                  padding: "2px",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  fontWeight: "lighter",
                  height: "30px",
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                43
              </h4>
            </HeadingContent>
            <MoreHoriz />
          </HeadingContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBox>
              <InputBase
                placeholder="Search Sales"
                sx={{
                  fontSize: "10px",
                  color: "white",
                  paddingLeft: "10px",
                  "&::placeholder": {
                    opacity: "0.9",
                  },
                }}
              />
              <Search
                sx={{
                  fontSize: "medium",
                  opacity: "0.7",
                }}
              />
            </InputBox>
            <SidebarButton
              sx={{
                backgroundColor: "#b9bd93",
                "&:hover": {
                  opacity: "0.7",
                  backgroundColor: "#b9bd93",
                },
              }}
            >
              <RateReview
                sx={{
                  fontSize: "medium",
                  color: "black",
                }}
              />
            </SidebarButton>
          </Box>
        </InsideTopBox>
      </TopBox>
      <DropDown />
    </SideNavWrapper>
  );
};

export default SideNav;
