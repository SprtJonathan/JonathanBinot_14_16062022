import { configureStore } from "@reduxjs/toolkit";

import storedUsers from "./reducers/storedUsers";

const store = configureStore({
  reducer: {
    usersList: storedUsers,
  },
});

export default store;
