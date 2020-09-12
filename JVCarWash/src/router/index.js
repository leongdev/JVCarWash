import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import Application from './app';
import Login from './login';

import themes from '../themes';

const Router = () => {
  const [isLoaded, setLoading] = useState(true);
  const deviceTheme = 'light';
  const theme = themes[deviceTheme] || theme.light;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isLoaded ? <Application theme={theme} /> : <Login />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Router;
