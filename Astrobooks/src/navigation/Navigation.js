// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BookList from '../screens/BookList';
import BookDetails from '../screens/BookDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
