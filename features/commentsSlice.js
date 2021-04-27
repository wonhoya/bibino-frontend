import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsAdded: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { commentsAdded } = commentsSlice.actions;
const getComments = (state) => state.comments.data;

export { commentsSlice, commentsAdded, getComments };
