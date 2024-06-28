import { createSlice } from "@reduxjs/toolkit";

const itemListSlice = createSlice({
  name: "itemList",
  initialState: {
    imagesList: [],
  },
  reducers: {
    // addImages: (state, action) => {},
  },
});

export default itemListSlice.reducer;
