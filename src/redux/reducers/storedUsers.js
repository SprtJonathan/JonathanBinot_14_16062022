import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "usersList",
  initialState: {
    value: [],
  },
  reducers: {
    storeUser: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
