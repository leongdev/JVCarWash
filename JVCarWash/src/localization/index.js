import React, {createContext, useContext, useState} from 'react';

import en_us from './languages/en_us';
import pt_br from './languages/pt_br';
import JVAppointmentsCard from '../components/JVAppointmentsCard';

const Context = createContext();

//TODO: Add localization logic
function findLanguage() {
  return en_us;
}

export function texts() {
  const {language} = useContext(Context);
  return language;
}

function LanguageProvider({children}) {
  return (
    <Context.Provider value={{language: findLanguage()}}>
      {children}
    </Context.Provider>
  );
}
export {Context, LanguageProvider};
