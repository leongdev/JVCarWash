import React from 'react';
import JVHeader, {JVHeaderTypes} from '../../components/JVHeader';
import {JVSafeArea} from '../../components/JVSafeArea';
import {texts} from '../../localization';

const NotificationScreen = (props) => {
  const text: Object = texts();
  return (
    <JVSafeArea>
      <JVHeader headerTitle={'Notifications'} type={JVHeaderTypes.back} />
    </JVSafeArea>
  );
};

export default NotificationScreen;
