import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the type for the user
// interface User {
//   id: number;
//   name: string;
// }

// Thunk to fetch user data
export const fetchData = createAsyncThunk(
  "users/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("../../../public/reviews.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Error fetching data:");
      return rejectWithValue(error.message);
    }
  }
);

interface UsersState {
  data: any[];
  searchVal: string
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  searchVal: '',
  loading: false,
  error: null,
};

// Create the slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortByName: (state) => {
      const sorted = state.data.sort((a, b) => a.name.localeCompare(b.name));
      state.data = sorted;
    },
    sortByRating: (state) => {
      const sorted = state.data.sort((a, b) => b.rating - a.rating);
      state.data = sorted;
    },
    deleteUsers: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.data = state.data.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    },
    searchUser: (state) => {
      state.data = state.data.filter((user) =>
        user.name.toLowerCase().includes(state.searchVal)
      );
    },
    setSearchVal: (state, action: PayloadAction<string>) => {
      state.searchVal = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  sortByName,
  sortByRating,
  searchUser,
  deleteUsers,
  updateUser,
  setSearchVal
  // setUsersToDel,
  // setUpdatedUsers,
} = usersSlice.actions;
export default usersSlice;
