import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useColor} from '../../utils/hookUtils';
import {styles} from './style';

import * as sizes from '../../constants/sizes';

import PropTypes from 'prop-types';
import constants from '../../constants/constants';

export const JVHeaderTypes = {
  default: 'default',
  back: 'back',
};

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
  navigation,
  type,
}) => {
  const checkBack: boolean = type && type === JVHeaderTypes.back ? true : false;
  const checkDefault: boolean =
    type && type === JVHeaderTypes.default ? true : false;
  const color = useColor();
  const style = styles(color);

  /**
   *
   * @returns {JSX.Element}
   */
  function renderNotifications() {
    return (
      <TouchableOpacity
        style={style.headerIcon}
        onPress={() => navigation.navigate('Notifications')}>
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

  /**
   *
   * @returns {JSX.Element}
   */
  function renderRightIcons() {
    return (
      <View style={style.iconContainer}>
        {constants.SYSTEM.HAS_NOTIFICATIONS ? renderNotifications() : null}
        {constants.SYSTEM.HAS_CHAT ? renderChat() : null}
      </View>
    );
  }

  /**
   *
   * @returns {JSX.Element}
   */
  function renderBackIcon(color: Object) {
    return (
      <TouchableOpacity
        style={style.iconContainerLeft}
        onPress={() => navigation.goBack()}>
        <View style={style.headerGobackIcon}>
          <MaterialCommunityIcons
            color={color.COLOR_2}
            size={sizes.ICON_SIZES.ROUND_BUTTON_ICON}
            name={'arrow-left'}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        ...style.headerContainer,
        justifyContent: checkDefault ? 'space-between' : 'flex-start',
      }}>
      {checkBack ? renderBackIcon(color) : null}
      <Text style={style.headerTitle}>{headerTitle}</Text>
      {checkDefault ? renderRightIcons() : null}
    </View>
  );
};

JVHeader.propTypes = {
  onPressChat: PropTypes.func,
  onPressMessage: PropTypes.func,
  headerTitle: PropTypes.string.isRequired,
  hasNotifications: PropTypes.bool,
  hasChatNotifications: PropTypes.bool,
  type: PropTypes.string,
};

export default memo(JVHeader);
