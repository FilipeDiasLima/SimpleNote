import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotesList from './Pages/NotesList'
import OpenNote from './Pages/OpenNote'
import EditNote from './Pages/EditNote'
import AddNote from './Pages/AddNote'

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="NotesList" component={NotesList} />
        <Screen name="OpenNote" component={OpenNote} />
        <Screen name="EditNote" component={EditNote} />
        <Screen name="AddNote" component={AddNote} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;