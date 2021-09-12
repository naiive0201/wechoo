import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialPage="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
