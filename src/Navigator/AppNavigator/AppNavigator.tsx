import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Subscription} from 'rxjs';
import res from '../../Res';
import AuthScreen from '../../Screens/AuthScreen';
import HomeScreen from '../../Screens/HomeScreen';
import useAuth from '../../Hooks/useAuth';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={AuthScreen}
        options={{cardStyle: {backgroundColor: res.Colors.primaryWhite}}}
      />
    </Stack.Navigator>
  );
}

interface State {
  isLoggedIn: boolean;
  lang: string;
}

const AppNavigator = () => {
  const { token, login, logout, userId } = useAuth();

  useEffect(() => {

  }, []);

  return (
    <NavigationContainer>
        {!!token ? <HomeScreen /> : <AuthStack />}
    </NavigationContainer>
  );

}

export default AppNavigator;