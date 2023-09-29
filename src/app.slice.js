import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backStack: [],
  forwardStack: [],
  currentLocation: '/',
  countNewNotify: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handleBackPage: (state, action) => {
      state.forwardStack.push(state.currentLocation);
      state.currentLocation = state.backStack.pop();
    },
    handleToPage: (state, action) => {
      state.backStack.push(state.currentLocation);
      state.currentLocation = action.payload;
    },
    handleForward: (state, action) => {
      state.backStack.push(state.currentLocation);
      state.currentLocation = state.forwardStack.pop();
    },
  },
});

export const { handleBackPage, handleForward, handleToPage } = appSlice.actions;

export default appSlice.reducer;
