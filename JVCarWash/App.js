import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ThemeProvider} from 'styled-components';

import HomeScreen from './src/screens/home';
import ServiceScreen from './src/screens/services';
import ProfileScreen from './src/screens/profile';
import AppointmentsScreen from './src/screens/appointments';

import themes from './src/themes';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [isLoaded, setLoading] = useState(true);
  const deviceTheme = 'light';
  const theme = themes[deviceTheme] || theme.light;

  function loginRouter() {
    return <Stack.Navigator />;
  }

  function tabBarRouter() {
    return (
      <Tab.Navigator
        activeColor={theme.COLOR_1}
        inactiveColor={theme.COLOR_2}
        barStyle={{
          backgroundColor: theme.HEADER_COLOR,
        }}>
        <Tab.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            tabBarLabel: 'home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name={'home'} color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          activeColor={theme.COLOR_1}
          inactiveColor={theme.COLOR_2}
          name={'ServiceScreen'}
          component={ServiceScreen}
          labeled={false}
          options={{
            headerShown: false,
            gestureEnabled: true,
            tabBarLabel: 'services',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name={'car-wash'}
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          activeColor={theme.COLOR_1}
          inactiveColor={theme.COLOR_2}
          name={'appointments'}
          component={AppointmentsScreen}
          labeled={false}
          options={{
            headerShown: false,
            gestureEnabled: true,
            tabBarLabel: 'appointments',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name={'calendar-month'}
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          activeColor={theme.COLOR_1}
          inactiveColor={theme.COLOR_2}
          name={'profile'}
          component={ProfileScreen}
          labeled={false}
          options={{
            headerShown: false,
            gestureEnabled: true,
            tabBarLabel: 'profile',
            tabBarIcon: ({color}) => (
              <MaterialIcons name={'person'} color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isLoaded ? tabBarRouter() : loginRouter()}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
