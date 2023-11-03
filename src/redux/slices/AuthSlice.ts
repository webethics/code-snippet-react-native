import { createSlice } from '@reduxjs/toolkit';
import { AuthInterface } from '../../types/AuthInterface';

const initialState:  AuthInterface = {
    login: {
        email: '',
        password: ''   
    },
    signUp: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
}

const signUpSlice = createSlice({
  name: 'AuthInfo',
  initialState,
  reducers: {
    updateSignUpData(state, action) {
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          ...action.payload,
        },
      };
    },

  },
});

export const {
  updateSignUpData,
} = signUpSlice.actions;

export default signUpSlice;
