import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const storeRegister = createAsyncThunk("register", async (payload) => {
  console.log("slice register payload", payload);
});

export const storeLogin = createAsyncThunk("login", async (payload) => {
  console.log("slice login payload", payload);
  const res = payload
  return res
});

export const storeLogout = createAsyncThunk("logout", async (payload) => {
  console.log("slice logout payload", payload);
  const res = payload
  return res
});

const storeSlice = createSlice({
  name: "store",
  initialState: {
    token: false,
    currentUser: null,
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(storeRegister.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(storeRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.currentUser = action.payload;
      })
      .addCase(storeRegister.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(storeLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
        state.token = false;
      })
      .addCase(storeLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.token = true;
        state.currentUser = action.payload;
      })
      .addCase(storeLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.token = false;
      })
      .addCase(storeLogout.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
          state.token = true;
      })
      .addCase(storeLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.token = false;
        state.currentUser = action.payload;
      })
      .addCase(storeLogout.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
          state.token = true;
      });
  },
});

export default storeSlice.reducer;
