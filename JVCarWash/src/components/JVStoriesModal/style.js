import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';

const {height, width} = getWindowSizes();

export const styles = (color) =>
  StyleSheet.create({
    storiesModalContainer: {
      backgroundColor: 'black',
      width: width,
      height: height,
      alignSelf: 'center',
    },
  });
