import api from './api';
import { SignUp, Login } from '../types/AuthInterface';

const AuthServices = {
  login(payload: Login) {
    return api.post('login' ,payload)
  },
  signUp(payload: SignUp) {
    return api.post('/signup', payload)
  },
};

export default AuthServices;