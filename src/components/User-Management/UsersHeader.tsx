import {
  UserDataStyles,
  UserHeaderStyles,
} from "../../mui-components/User-Management/UserHeaderStyles";
import { useAppSelector, useAppDispatch } from "../../store/store";
import Rating from "@mui/material/Rating";
import { deleteUsers } from "../../store/slices/usersSlice";
import { useNavigate } from "react-router";
import { Delete } from "@mui/icons-material";

const userHeaderDetails: string[] = [
  "Name",
  "Last Seen",
  "Orders",
  "Ratings",
  "Total Spent",
];

// Function to generate random date for the last week

const randomDate = (): string => {
  const today = new Date(2024, 10, 3)
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  const randomDate = new Date(
    lastWeek.getTime() + Math.random() * (today.getTime() - lastWeek.getTime())
  );

  const month = (randomDate.getMonth() + 1).toString().padStart(2, "0");
  const day = randomDate.getDate().toString().padStart(2, "0");
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;  // Returns the date in the format dd/mm/yyyy
};

// Function to generate random order number for the user

const randomOrder = (): number => {
  return Math.floor(Math.random() * 100);
};

// Function to generate random amount spent by the user

const randomSpent = (): number => {
  return Math.floor(Math.random() * 1000);
};

const UsersHeader = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.users.data);

  return (
    <>
      <UserHeaderStyles sx={{ zIndex: 1 }}>
        {userHeaderDetails.map((detail, index) => (
          <h3 key={index}>{detail}</h3>
        ))}
      </UserHeaderStyles>
      {data.map((detail) => (
        <UserDataStyles
          key={detail.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <>
            <Delete
              sx={{
                mr: "20px",
                cursor: "pointer",
                "&:hover": { color: "red" },
              }}
              onClick={() => dispatch(deleteUsers(detail.id))}
            />
            <p
              style={{ flex: 1, cursor: "pointer", textDecoration: "none" }}
              onClick={() => navigator(`/user-management/${detail.id}`)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              {detail.name}
            </p>
            <p style={{ flex: 1 }}>{randomDate()}</p>
            <p style={{ flex: 1 }}>{randomOrder()}</p>
            <Rating
              sx={{ fontSize: "15px", flex: 1 }}
              name="read-only"
              value={detail.rating}
              readOnly
            />
            <p style={{ flex: 1 }}>
              {randomSpent()}
              {" $"}
            </p>
          </>
        </UserDataStyles>
      ))}
    </>
  );
};

export default UsersHeader;
