import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack/AppStack';
import { createNavigationContainerRef } from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import type { RootState } from '../redux/store';
import { userActions } from '../redux/slices/UserSlice';
import storageServices from '../services/async-storage/StorageServices';
import LoaderScreen from '../components/LoaderScreen';

const Routes = () => {
  const navigationRef = createNavigationContainerRef();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const [appHasLoaded, setAppHasLoaded] = React.useState(false);

  const checkUserLoginStatus = async () => {
    try {
      const token = await storageServices.getStringValue('token');
      if (token) {
        dispatch(userActions.logIn(true));
        const usrData = await storageServices.getObjectValue('userData');
        dispatch(userActions.setUserData(usrData));
      }
      setAppHasLoaded(true);
    } catch (error) {
      // console.error('_retrieveHistoryDetailError', error);
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  }, [isLoggedIn]);
  return (
    <>
      {!appHasLoaded ? (
        <LoaderScreen />
      ) : (
        <NavigationContainer ref={navigationRef}>
          {!isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
