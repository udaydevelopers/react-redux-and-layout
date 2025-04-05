import { createSlice } from '@reduxjs/toolkit';

// Get auth from localStorage on app start
const storedAuth = JSON.parse(localStorage.getItem('auth'));

const initialState = storedAuth || {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      // Save to localStorage
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }));
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // Remove from localStorage
      localStorage.removeItem('auth');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
