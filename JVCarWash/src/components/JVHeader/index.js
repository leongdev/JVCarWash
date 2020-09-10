import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {useColor} from '../../utils/hookUtils';
import {styles} from './style';

import * as sizes from '../../constants/sizes';

import PropTypes from 'prop-types';
import constants from '../../constants/constants';

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const JVHeader: React.FC = ({
  onPressChat,
  onPressMessage,
  hasNotifications,
  hasChatNotifications,
  headerTitle,
}) => {
  const color = useColor();
  const style = styles(color);

  /**
   *
   * @returns {JSX.Element}
   */
  function renderNotifications() {
    return (
      <TouchableOpacity style={style.headerIcon} onPress={() => onPressMessage}>
        <MaterialCommunityIcons
          name={'bell'}
          size={sizes.ICON_SIZES.ROUND_BUTTON_ICON}
          color={color.TEXT_COLOR_5}
        />
        {hasNotifications ? (
          <View style={style.headerCommentNotification} />
        ) : null}
      </TouchableOpacity>
    );
  }

  /**
   *
   * @returns {JSX.Element}
   */
  function renderChat() {
    return (
      <TouchableOpacity style={style.headerIcon} onPress={() => onPressChat}>
        <MaterialIcons
          name={'comment'}
          size={sizes.ICON_SIZES.ROUND_BUTTON_ICON}
          color={color.TEXT_COLOR_5}
        />
        {hasChatNotifications ? (
          <View style={style.headerNotification} />
        ) : null}
      </TouchableOpacity>
    );
  }

  return (
    <View style={style.headerContainer}>
      <Text style={style.headerTitle}>{headerTitle}</Text>
      <View style={style.iconContainer}>
        {constants.SYSTEM.HAS_NOTIFICATIONS ? renderNotifications() : null}
        {constants.SYSTEM.HAS_CHAT ? renderChat() : null}
      </View>
    </View>
  );
};

JVHeader.propTypes = {
  onPressChat: PropTypes.func,
  onPressMessage: PropTypes.func,
  headerTitle: PropTypes.string,
  hasNotifications: PropTypes.bool,
  hasChatNotifications: PropTypes.bool,
};

export default memo(JVHeader);
