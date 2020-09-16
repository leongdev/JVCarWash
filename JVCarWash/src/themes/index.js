import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';

import dark from './dark';
import light from './light';

const Context = createContext();

export function themes() {
  const theme = useContext(Context);
  return theme;
}

function findTheme() {
  const theme = useColorScheme();
  return theme === 'light' ? light : dark;
}

function ThemeProvider({children}) {
  return <Context.Provider value={findTheme()}>{children}</Context.Provider>;
}
export {Context, ThemeProvider};
