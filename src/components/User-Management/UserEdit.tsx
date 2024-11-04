import {
  Box,
  Button,
  InputBase,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import {
  StyledTextArea,
  UserEditContainer,
  UserEditWrapper,
  UserImage,
} from "../../mui-components/User-Management/UserEditStyles";
import React from "react";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router";
import { updateUser } from "../../store/slices/usersSlice";

const UserEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useAppSelector((state) =>
    state.users.data.find((user) => user.id === Number(id))
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  };

  const [, setValue] = React.useState<number | null>(2);
  const [open, setOpen] = React.useState(false);
  const [editedUser, setEditedUser] = React.useState<any>(user);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  return (
    <UserEditWrapper>
      <UserEditContainer>
        <UserImage src="https://plus.unsplash.com/premium_photo-1728384290756-4f884c9c6812?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <label
            htmlFor="searchChats"
            style={{ display: "block", fontSize: "20px" }}
          >
            Name:
          </label>
          <InputBase
            id="searchChats"
            placeholder="Enter Your Name"
            aria-label="Enter Your Name"
            defaultValue={user?.name || "Loading..."}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
            sx={{
              fontSize: "20px",
              color: "white",
              border: "1px solid white",
              paddingLeft: "10px",
              borderRadius: "10px",
              width: "40%",
              outline: "none",
              "&::placeholder": { opacity: "0.9" },
              "&:active": { outline: "none" },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <label
            htmlFor="reviews"
            style={{ display: "block", fontSize: "20px" }}
          >
            Review:
          </label>
          <StyledTextArea
            id="reviews"
            placeholder="Enter Your Review"
            aria-label="Enter Your Review"
            minRows={3}
            defaultValue={user?.review || "Loading..."}
            onChange={(e) =>
              setEditedUser({ ...editedUser, review: e.target.value })
            }
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            width: "46%",
          }}
        >
          <label
            htmlFor="ratings"
            style={{ display: "block", fontSize: "20px" }}
          >
            Rating:
          </label>
          <Rating
            id="ratings"
            sx={{ fontSize: "35px" }}
            name="simple-controlled"
            defaultValue={user?.rating || 2}
            onChange={(_, newValue) => {
              if (newValue !== null) {
                setValue(newValue);
                setEditedUser({ ...editedUser, rating: newValue });
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "45%",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "blue" }}
            onClick={() => {
              dispatch(updateUser(editedUser));
              navigate("/user-management");
            }}
          >
            Save
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ backgroundColor: "red" }}
          >
            Cancel
          </Button>
        </Box>
      </UserEditContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: {
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to cancel?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate("/user-management");
                dispatch(updateUser(user));
              }}
              sx={{ backgroundColor: "blue", width: "40%" }}
            >
              Yes
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ backgroundColor: "red", width: "40%" }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </UserEditWrapper>
  );
};

export default UserEdit;
