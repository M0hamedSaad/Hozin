import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Sign from '../screens/sign';
import OnBoard from '../screens/onBoard';
const Stack = createNativeStackNavigator();
const Auth = () => {
  const isSkip = useSelector(state => state.skipBoardingState.isSkip);
  return (
    <Stack.Navigator
      //  initialRouteName={isSkip ? 'Sign' : 'OnBoard'}
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        animationEnabled: true,
      }}>
      <Stack.Screen name="OnBoard" component={OnBoard} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};
export default Auth;