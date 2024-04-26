import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from './BookList';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookList"
        component={BookList}
        options={{ title: 'Lista de Livros' }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
