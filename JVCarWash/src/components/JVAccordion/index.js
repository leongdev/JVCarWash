import React, {memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function JVAccordion({children, title}) {
  const [switcher, setSwitcher] = useState(false);
  const color = useColor();
  const style = styles(color);
  return (
    <>
      <View style={style.bottomLine} />
      <TouchableOpacity
        style={style.serviceContainer}
        onPress={() => setSwitcher(!switcher)}>
        <Text style={style.accordionTitle}>{title}</Text>
        <MaterialCommunityIcons
          name={switcher ? 'chevron-up' : 'chevron-down'}
          size={30}
          color={color.COLOR_6}
          style={{marginRight: 20}}
        />
      </TouchableOpacity>
      <View style={style.bottomLine} />
      <View>{switcher ? {children} : null}</View>
    </>
  );
}

JVAccordion.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

export {JVAccordion};
