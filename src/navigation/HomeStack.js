import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Booking from '../screens/booking';
import Profile from '../screens/profile';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        animationEnabled: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default HomeStack;
