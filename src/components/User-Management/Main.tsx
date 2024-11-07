import { useAppDispatch } from "../../store/store";
// import {  setUpdatedUsers } from "../../store/slices/usersSlice";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import Navbar from "../Chats/Navbar";
import UsersHeader from "./UsersHeader";
import { fetchData } from "../../store/slices/usersSlice";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isFetched = localStorage.getItem("isFetched"); // Check if data is already fetched

    if (!isFetched) {
      dispatch(fetchData());
      localStorage.setItem("isFetched", "true");  // setting an item in local storage to avoid fetching data again
    }
  }, [dispatch]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Navbar text="User Management" width="76vw" />
        <Box
          sx={{
            height: "90vh",
            backgroundColor: "#1A1C1B",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "",
              height: "90%",
              width: "90%",
              overflowY: "auto",
            }}
          >
            <UsersHeader />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
