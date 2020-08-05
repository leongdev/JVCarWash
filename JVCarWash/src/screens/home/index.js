import React from 'react';
import {HomeContainer} from './style';

import JVButton from '../../components/JVButton';
import JVHeader from '../../components/JVHeader';

const HomeScreen = (props) => {
  return (
    <HomeContainer>
      <JVButton
        buttonTitle={'BOOK'}
        onPress={() => null}
        buttonTheme={'deactivated'}
      />
    </HomeContainer>
  );
};

export default HomeScreen;
