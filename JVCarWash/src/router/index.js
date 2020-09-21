import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '../themes';
import {LanguageProvider} from '../localization';

import Application from './main';
import Login from './login';

const Router = () => {
  const [isLoaded, setLoading] = useState(true);
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavigationContainer>
          {isLoaded ? <Application /> : <Login />}
        </NavigationContainer>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Router;
