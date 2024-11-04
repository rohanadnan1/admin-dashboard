import {
  ChatsWrapper,
  TopBox,
  InsideTopBox,
  InputBox,
  ChatsBoxWrapper,
  ChatsBox,
  ChatsHeading,
  ClearChatButton,
} from "../../mui-components/Chats/ChatsStyles";
import { Box, InputBase } from "@mui/material";
import {
  MoreHoriz,
  Search,
  RateReview,
  PushPin,
  Message,
  Close,
} from "@mui/icons-material";
import { SidebarButton as SearchButton } from "../../mui-components/Chats/SidebarStyles";
import {
  HeadingContainer,
  HeadingContent,
} from "../../mui-components/Chats/MainStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { removeChats } from "../../store/slices/chatSlice";

const Chats = () => {
  const selector = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();
  return (
    <ChatsWrapper sx={{ position: "relative" }}>
      <TopBox>
        <InsideTopBox>
          <HeadingContainer>
            <HeadingContent>
              <h4
                style={{
                  fontWeight: "lighter",
                }}
              >
                Chats
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
                23
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
                placeholder="Search Chats"
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
            <SearchButton
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
            </SearchButton>
          </Box>
        </InsideTopBox>
      </TopBox>
      <ChatsBoxWrapper>
        <ChatsHeading>
          <PushPin
            sx={{
              fontSize: "10px",
            }}
          />
          Pinned
        </ChatsHeading>
        <ChatsBox>Some Random Chats</ChatsBox>
        <ChatsBox>Some Random Chats {"(2)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(3)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(4)"}</ChatsBox>
        <ChatsHeading>
          <Message
            sx={{
              fontSize: "10px",
            }}
          />
          {selector.length > 0 ? "All" : "No chats"}
        </ChatsHeading>
        {selector.map((chat, index) => (
          <ChatsBox key={index}>{chat.message}</ChatsBox>
        ))}
      </ChatsBoxWrapper>
      <ClearChatButton
        onClick={() => dispatch(removeChats())}
        sx={{ position: "absolute", bottom: "30px", right: "10px" }}
      >
        <Close /> Clear all chats
      </ClearChatButton>
    </ChatsWrapper>
  );
};

export default Chats;
