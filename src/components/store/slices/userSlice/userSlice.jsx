import { createSlice } from '@reduxjs/toolkit';

const registeredUsers = localStorage.getItem('registeredUsers')
  ? JSON.parse(localStorage.getItem('registeredUsers'))
  : [];

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

export const userSlice = createSlice({
  name: 'users', // ✅ Fixed

  initialState: {
    registeredUsers: registeredUsers,
    loginUser: currentUser,
    error: null,
    success: null,
  },

  reducers: {
    registerUser: (state, action) => {
      const { email } = action.payload.user;
      const existsEmail = state.registeredUsers.find(
        (user) => user.email === email
      );

      if (existsEmail) {
        state.error = 'Email already exists!';
        state.success = null;
      } else {
        state.error = null;
        state.success = 'User registered successfully';
        state.registeredUsers.push(action.payload.user);
        localStorage.setItem(
          'registeredUsers',
          JSON.stringify(state.registeredUsers)
        );
      }
    },

    loginUser: (state, action) => {
      const { email, password } = action.payload.user;

      const confirmLoginUser = state.registeredUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (confirmLoginUser) {
        state.loginUser = confirmLoginUser;
        localStorage.setItem('currentUser', JSON.stringify(confirmLoginUser));
        state.error = null;
        state.success = 'User login successful';
      } else {
        state.error = 'Invalid credentials';
        state.success = null;
      }
    },

    logout : (state) => {
      state.loginUser = null
      state.error = null 
      state.success = null
      localStorage.removeItem('currentUser')
    }
  },
});

// ✅ Export both actions
export const { registerUser, loginUser , logout } = userSlice.actions;
export default userSlice.reducer;
