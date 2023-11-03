import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const StackAuth = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <StackAuth.Navigator screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name="Tabs" component={TabNavigator} />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
