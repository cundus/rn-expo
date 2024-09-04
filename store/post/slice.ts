import { createSlice } from "@reduxjs/toolkit";
import { getPostAsync } from "./thunk";

export interface IPost {
   id: number;
   slug: string;
   url: string;
   title: string;
   content: string;
   image: string;
   thumbnail: string;
   status: string;
   category: string;
   publishedAt: string;
   updatedAt: string;
   userId: number;
}

interface IPostState {
   post: IPost[];
}

const initialState: IPostState = {
   post: [],
};

const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {
      setPost(state, action) {
         state.post = action.payload;
      },
      deletePost(state, action) {
         state.post = state.post.filter((post) => post.id !== action.payload);
      },
   },
   extraReducers(builder) {
      builder.addCase(getPostAsync.fulfilled, (state, action) => {
         console.log("payload", action.payload);

         state.post = action.payload;
      });
   },
});

export const { setPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
