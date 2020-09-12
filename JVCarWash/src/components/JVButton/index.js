import React, {memo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';

export const JVButtonTypes = {
  default: 'default',
  inverted: 'inverted',
  deactivated: 'deactivated',
  activated: 'activated',
  white: 'white',
  whiteInverted: 'whiteInverted',
};

const JVButton = ({onPress, buttonTitle, buttonType}) => {
  const color = useColor();
  const style = styles(color);

  /**
   * Returns an object with title and buttonStyle
   * @param buttonType
   * @returns {JSX.Element}
   */
  function getButtonStyle(buttonType) {
    let _style = {button: '', title: ''};
    switch (buttonType) {
      case 'default':
        _style.button = style.buttonContainerDefault;
        _style.title = style.titleDefault;
        break;
      case 'inverted':
        _style.button = style.buttonContainerInverted;
        _style.title = style.titleInversed;
        break;
      case 'deactivated':
        _style.button = style.buttonContainerDeactivated;
        _style.title = style.titleDeactivated;
        break;
      case 'activated':
        _style.button = style.buttonContainerActivated;
        _style.title = style.titleActivated;
        break;
      case 'white':
        _style.button = style.buttonContainerWhite;
        _style.title = style.titleWhite;
        break;
      case 'whiteInverted':
        _style.button = style.buttonContainerWhiteInveted;
        _style.title = style.titleWhiteInverted;
        break;
      default:
        _style.button = style.buttonContainerDefault;
        _style.title = style.titleDefault;
        break;
    }

    return _style;
  }

  return (
    <TouchableOpacity
      style={getButtonStyle(buttonType).button}
      onPress={() => onPress()}>
      <Text style={getButtonStyle(buttonType).title}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

JVButton.propTypes = {
  onPress: PropTypes.func,
  buttonTitle: PropTypes.string,
  buttonType: PropTypes.string,
};

export default memo(JVButton);
