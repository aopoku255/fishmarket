import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Hello",
    content: "My name is this",
  },
  {
    id: nanoid(),
    title: "Hi",
    content: "I come from that",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postsAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postsAdded } = postSlice.actions;
export default postSlice.reducer;
