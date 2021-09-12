import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
//import AddDrawer from './DrawerNavigator';
import AddScreen from '../components/Add';
import CategoryScreen from '../screens/tab/Category';
import BookmarkScreen from '../screens/tab/Bookmark';
import FollowScreen from '../screens/tab/Follow';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Category') {
              //iconName = focused ? 'ios-list-box' : 'ios-list';
              iconName = focused ? 'sort-reverse-variant' : 'sort-variant';
              return <MaterialCommunityIcons name={iconName} size={size} color="black" />;
            } else if (route.name === 'Add') {
              iconName = 'md-add-circle-outline';
            } else if (route.name === 'Bookmark') {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            } else if (route.name === 'Follow') {
              iconName = focused ? 'md-heart-circle' : 'md-heart-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color="black" />;
          },

          tabBarActiveTintColor: '#000000',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
          }}
        />
        <Tab.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            tabBarLabel: '카테고리',
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarLabel: '',
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
            },
          })}
        />
        <Tab.Screen
          name="Follow"
          component={FollowScreen}
          options={{
            tabBarLabel: '팔로우',
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            tabBarLabel: '북마크',
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
