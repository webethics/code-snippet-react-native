import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

const HomeScreens = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Homepage" component={Home} />
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="BusinessProfileCustomerView"
        component={CustomerView}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BookingRequest"
        component={BookingRequest}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeScreens;
