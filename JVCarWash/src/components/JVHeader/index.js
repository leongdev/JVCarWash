import React, {memo} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {JVHeaderContainer, JVHeaderIcon, JVHeaderTitle} from './style';
import constants from '../../constants/constants';

const JVHeader = (props) => {
  /**
   *
   * @returns {JSX.Element}
   */
  function renderNotifications() {
    return (
      <JVHeaderIcon onPress={() => props.onPress}>
        <MaterialCommunityIcons name={'bell'} size={10} color={'red'} />
      </JVHeaderIcon>
    );
  }

  /**
   *
   * @returns {JSX.Element}
   */
  function renderChat() {
    return <JVHeaderIcon onPress={() => props.onPress} />;
  }

  return (
    <JVHeaderContainer>
      <JVHeaderTitle>{props.headerTitle}</JVHeaderTitle>
      {constants.SYSTEM.HAS_NOTIFICATIONS ? renderNotifications() : null}
      {constants.SYSTEM.HAS_CHAT ? renderChat() : null}
    </JVHeaderContainer>
  );
};

export default memo(JVHeader);
