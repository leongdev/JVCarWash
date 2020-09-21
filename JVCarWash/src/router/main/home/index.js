import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screens/home';
import NotificationScreen from '../../../screens/notification';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Notifications'}
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Home;
