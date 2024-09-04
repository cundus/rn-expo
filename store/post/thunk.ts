import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostAsync = createAsyncThunk("post/getPost", async () => {
   try {
      console.log("fetching");
      const res = await fetch("https://jsonplaceholder.org/posts");
      const data = await res.json();

      return data;
   } catch (error) {
      console.log(error);
   }
});
