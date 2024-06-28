import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../apis/apis'

export const getModifierCategory = createAsyncThunk(
    "get/modifierCategory",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.getAllModifierCategory();
        console.log('response',response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const modifierCategorySlice = createSlice({
  name: "modifierCategory",
  initialState: {
    loading: false,
    error: false,
    success: false,
    modifierCategoryData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getModifierCategory.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false; 
      })
      .addCase(getModifierCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.modifierCategoryData = action.payload
        // console.log(' action.payload', action.payload);
   
      })
      .addCase(getModifierCategory.rejected, (state) => {
        state.loading = false;
        state.error = true; 
        state.success = false;
      });
  },
});

export default modifierCategorySlice.reducer;
