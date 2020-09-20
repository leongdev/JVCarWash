import React from 'react';
import {styles} from './style';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import JVHeader from '../../components/JVHeader';
import {useColor} from '../../utils/hookUtils';
import JVAccordion, {JVAccordionTypes} from '../../components/JVAccordion';
import {JVSafeArea} from '../../components/JVSafeArea';
import {texts} from '../../localization';

const ProfileScreen = (props) => {
  const color = useColor();
  const style = styles(color);
  const text: Object = texts();

  return (
    <JVSafeArea>
      <JVHeader headerTitle={'Profile'} />
      <JVAccordion
        title={text.PROFILE_SCREEN.ACCOUNT_DETAILS}
        type={JVAccordionTypes.navigateTo}
        onPressed={() => null}>
        <Text>OI</Text>
      </JVAccordion>
      <JVAccordion
        title={text.PROFILE_SCREEN.PLACES}
        type={JVAccordionTypes.navigateTo}
        onPressed={() => null}>
        <Text>OI</Text>
      </JVAccordion>
    </JVSafeArea>
  );
};

export default ProfileScreen;
