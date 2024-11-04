import { Box, Button, InputBase, Menu, MenuItem } from "@mui/material";
import {
  InputBox,
  InsideTopBox,
  TopBox,
} from "../../mui-components/Chats/ChatsStyles";
import { SideNavWrapper } from "../../mui-components/Dashboard/SideNavStyles";
import { MoreHoriz, RateReview, Search } from "@mui/icons-material";
import { SidebarButton } from "../../mui-components/Chats/SidebarStyles";
import {
  HeadingContainer,
  HeadingContent,
} from "../../mui-components/Chats/MainStyles";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  fetchData,
  setSearchVal,
  sortByName,
  sortByRating,
} from "../../store/slices/usersSlice";
import { searchUser } from "../../store/slices/usersSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.users.data);

  const dropDownOptions = [
    {
      name: "Sort by Name",
      fn: (popupState: any) => {
        popupState.close();
        dispatch(sortByName());
      },
    },
    {
      name: "Sort by Rating",
      fn: (popupState: any) => {
        popupState.close();
        dispatch(sortByRating());
      },
    },
  ];

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
                Users
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
                {data.length - 1}
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
                placeholder="Search Users"
                value={useAppSelector((state) => state.users.searchVal)}
                onChange={(e) => {
                  dispatch(setSearchVal(e.target.value));
                  if (e.target.value === "") {
                    dispatch(fetchData());
                  } else {
                    dispatch(searchUser());
                  }
                }}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "column",
          mt: "50px",
          gap: "10px",
        }}
      >
        <PopupState variant="popover" popupId={`popup-${"users"}`}>
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                sx={{
                  width: "230px",
                  padding: "10px 10px",
                  backgroundColor: "#454A45",
                  mt: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "10px",
                  "&:focus": {
                    outline: "none",
                  },
                  "&:hover": {
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                }}
                {...bindTrigger(popupState)}
              >
                {"Sort Users"}
              </Button>
              <Menu {...bindMenu(popupState)}>
                {dropDownOptions.map((option) => (
                  <MenuItem
                    sx={{ width: "200px" }}
                    onClick={() => option.fn && option.fn(popupState)}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
    </SideNavWrapper>
  );
};

export default Sidebar;
