import React, {memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const JVAccordionTypes = {
  default: 'default',
  navigateTo: 'navigateTo',
};

const JVAccordion: React.FC = ({children, title, type, onPressed}) => {
  const [switcher, setSwitcher] = useState(false);
  const color = useColor();
  const style = styles(color);

  function renderDefault() {
    return (
      <TouchableOpacity
        style={style.serviceContainer}
        onPress={() => setSwitcher(!switcher)}>
        <Text style={style.accordionTitle}>{title}</Text>
        <MaterialCommunityIcons
          name={switcher ? 'chevron-up' : 'chevron-down'}
          size={30}
          color={color.COLOR_6}
          style={style.chevronIcon}
        />
      </TouchableOpacity>
    );
  }

  function renderNavigateTo() {
    return (
      <TouchableOpacity
        style={style.serviceContainer}
        onPress={() => onPressed()}>
        <Text style={style.accordionTitle}>{title}</Text>
        <MaterialCommunityIcons
          name={'chevron-right'}
          size={30}
          color={color.COLOR_6}
          style={style.chevronIcon}
        />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={style.bottomLine} />
      {type && type === JVAccordionTypes.navigateTo
        ? renderNavigateTo()
        : renderDefault()}
      <View style={style.bottomLine} />
      {type && type === JVAccordionTypes.default ? (
        <View>{switcher ? children : null}</View>
      ) : null}
    </>
  );
};

JVAccordion.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onPressed: PropTypes.func,
};

export default memo(JVAccordion);
