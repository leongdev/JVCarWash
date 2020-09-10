import React, {memo} from 'react';
import {View} from 'react-native';
import {Video} from 'expo-av';
import {styles} from './style';
import {getWindowSizes, useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';

const JVStoriesModal = ({videoUrl}) => {
  const {height, width} = getWindowSizes();
  const color = useColor();
  const style = styles(color);

  return (
    <View style={style.storiesModalContainer}>
      <Video
        source={{uri: videoUrl}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={'cover'}
        isLooping={true}
        shouldPlay
        style={{width: width, height: height}}
      />
    </View>
  );
};
JVStoriesModal.propTypes = {
  videoUrl: PropTypes.string,
};

export default memo(JVStoriesModal);
