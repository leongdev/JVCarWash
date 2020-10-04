import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../../../screens/profile';
import PlacesScreen from '../../../screens/places';
import AccountDetail from '../../../screens/accountDetail';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Edit Profile'}
        component={PlacesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Places'}
        component={AccountDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Profile;
