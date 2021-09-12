import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddScreen from '../components/Add';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialPage="Add">
    <Drawer.Screen name="Add" component={AddScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
