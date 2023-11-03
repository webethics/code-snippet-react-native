import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../../constants/Color';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Color.lightBlue,
            height: 88,
            paddingBottom: 20,
          },
          tabBarShowLabel: false,
        })}
      >
        {/* <Tab.Screen name="MoreTab" component={HomeScreens} /> */}
        {/* <Tab.Screen name="MoreTab" component={HomeScreens} /> */}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
