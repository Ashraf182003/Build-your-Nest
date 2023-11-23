import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  user: { username: 'coding addict' },
  theme:"night",
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      const { night, winter } = themes;
      state.theme = state.theme === dracula ? winter : night;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer









