import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type UserInfo = {
  email: string;
  password: string;
};
const initialState: UserInfo = {
  //   serInfo: {
  email: '',
  password: '',
  //   },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      //   localStorage.setItem('userInfo', JSON.stringify(action.payload));

      //   const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      //   localStorage.setItem('expirationTime', expirationTime);
    },
    logout: (state) => {
      //   state.userInfo = {
      state.email = '';
      state.password = '';
      //   };
      //   localStorage.removeItem('userInfo');
      //   localStorage.removeItem('expirationTime');
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
