import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotesList from './Pages/NotesList'
import OpenNote from './Pages/OpenNote'

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="NoteList" component={NotesList} />
        <Screen name="OpenNote" component={OpenNote} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;