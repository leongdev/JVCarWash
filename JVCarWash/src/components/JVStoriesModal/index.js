import React, {memo} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
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
        style={{width: width, height: height}}
        repeat={true}
        resizeMode={'cover'}
      />
    </View>
  );
};
JVStoriesModal.propTypes = {
  videoUrl: PropTypes.string,
};

export default memo(JVStoriesModal);
