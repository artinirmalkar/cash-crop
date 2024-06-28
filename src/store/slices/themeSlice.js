// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setToggleTheme:(state,action)=>{
        state.theme = action.payload;
    }
  },
});

export const { toggleTheme, setToggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
