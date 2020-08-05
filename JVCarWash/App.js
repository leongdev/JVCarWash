import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {ThemeProvider} from 'styled-components';
import HomeScreen from './src/screens/home';
import themes from './src/themes';

const Stack = createStackNavigator();

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.light;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
