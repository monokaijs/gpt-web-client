import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  appLoading: boolean,
  theme: 'light' | 'dark',
  sidebarOpened: boolean,
}

const initialState: AppState = {
  appLoading: true,
  theme: 'light',
  sidebarOpened: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSideBarOpened(state, action: PayloadAction<boolean>) {
      state.sidebarOpened = action.payload;
    }
  },
  extraReducers: builder => {

  }
});

export const {
  setSideBarOpened
} = appSlice.actions;

export default appSlice.reducer;
