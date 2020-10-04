import React from 'react';
import JVHeader, {JVHeaderTypes} from '../../components/JVHeader';
import {JVSafeArea} from '../../components/JVSafeArea';

const NotificationScreen = ({navigation}) => {
  return (
    <JVSafeArea>
      <JVHeader
        headerTitle={'Notifications'}
        type={JVHeaderTypes.back}
        navigation={navigation}
      />
    </JVSafeArea>
  );
};

export default NotificationScreen;
