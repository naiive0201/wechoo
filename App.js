import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  );
}
