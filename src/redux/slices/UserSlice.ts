import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from '../../types/UserProfile';

const initialState: UserInterface = {
  isLoggedIn: false,
  loginInProgress:false,
  profile: {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    address: '',
    phone_number: ''
  },
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUserProfileData(state, action) {
      state.profile = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
