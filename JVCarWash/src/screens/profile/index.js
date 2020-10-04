import React from 'react';
import {Text, View, Image} from 'react-native';
import JVHeader from '../../components/JVHeader';
import JVAccordion, {JVAccordionTypes} from '../../components/JVAccordion';
import {JVSafeArea} from '../../components/JVSafeArea';
import {texts} from '../../localization';
import JVButton, {JVButtonTypes} from '../../components/JVButton';
import {useColor} from '../../utils/hookUtils';
import {styles} from './style';

const ProfileScreen = ({navigation}) => {
  const text: Object = texts();
  const color = useColor();
  const style = styles(color);
  return (
    <JVSafeArea>
      <JVHeader headerTitle={'Profile'} />
      <Image
        style={style.imageLogo}
        source={color.IMAGE_LOGO}
        resizeMode={'cover'}
      />
      <JVAccordion
        title={text.PROFILE_SCREEN.ACCOUNT_DETAILS}
        type={JVAccordionTypes.navigateTo}
        onPressed={() => navigation.navigate('Places')}>
        <Text>OI</Text>
      </JVAccordion>
      <JVAccordion
        title={text.PROFILE_SCREEN.PLACES}
        type={JVAccordionTypes.navigateTo}
        onPressed={() => navigation.navigate('Edit Profile')}>
        <Text>OI</Text>
      </JVAccordion>
      <View style={style.logOutButtonContainer}>
        <JVButton
          buttonTitle={'Log Out'}
          onPress={() => {}}
          buttonType={JVButtonTypes.inverted}
        />
      </View>
    </JVSafeArea>
  );
};

export default ProfileScreen;
