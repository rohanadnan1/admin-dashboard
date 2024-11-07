import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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

interface Data {
  id: number;
  name: string;
  rating: number;
  review: string;
}

interface UsersState {
  data: Data[];
  searchVal: string;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  searchVal: "",
  loading: false,
  error: null,
};

// Create the slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortByName: (state) => {
      const sorted = state.data.sort((a, b) => a.name.localeCompare(b.name)); // Sort the users by name in ascending order
      state.data = sorted;
    },
    sortByRating: (state) => {
      const sorted = state.data.sort((a, b) => b.rating - a.rating); // Sort the users by rating in descending order
      state.data = sorted;
    },
    deleteUsers: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload); // Delete a user by filtering out the user with the given id
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.data = state.data.map(
        (user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user // Update a user by replacing the user with the given id with the new user
      );
    },
    searchUser: (state) => {
      state.data = state.data.filter(
        (user) => user.name.toLowerCase().includes(state.searchVal) // Filter the users by name based on the search value
      );
    },
    setSearchVal: (state, action: PayloadAction<string>) => {
      state.searchVal = action.payload; // Set the search value so the value remains there even after changing the page
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // Handle the pending state while fetching data
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // Handle the fulfilled state after fetching data
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        // Handle the rejected state if there is an error fetching data
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
  setSearchVal,
} = usersSlice.actions;
export default usersSlice;
