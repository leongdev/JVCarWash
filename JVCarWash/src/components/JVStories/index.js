import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

import LinearGradient from 'react-native-linear-gradient';
import {getWindowSizes, useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';

/**
 * Notifications Component
 * Props = storiesType, imageSource, onPress
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const JVStories = ({onPress, imageSource, title}) => {
  const {height} = getWindowSizes();
  const color = useColor();
  const style = styles(color);

  return (
    <TouchableOpacity style={style.storiesButton} onPress={onPress}>
      <View style={style.storiesContainer}>
        <Image style={style.storiesImage} source={{uri: imageSource}} />
        <LinearGradient
          colors={[color.TRANSPAREDNT_COLOR, color.STORIES_GRADIENT_PRIMARY]}
          style={{
            width: height * 0.09,
            height: height * 0.09,
            position: 'absolute',
            borderRadius: height * 0.045,
          }}
        />
      </View>
      <Text style={style.storiesTitle} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

JVStories.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  imageSource: PropTypes.string,
};

export default memo(JVStories);
