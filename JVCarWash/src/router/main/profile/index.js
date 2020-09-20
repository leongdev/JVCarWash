import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../../screens/profile';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'Account Detatils'} component={ProfileScreen} />
      <Stack.Screen name={'Places'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Profile;
