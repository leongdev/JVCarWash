import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {getWindowSizes} from '../../utils/hookUtils';

const height = getWindowSizes().height;

export const styles = (color) =>
  StyleSheet.create({
    storiesButton: {
      height: height * 0.13,
      width: height * 0.1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
    },
    storiesContainer: {
      backgroundColor: color.STORIES_COLOR_PRIMARY,
      height: height * 0.1,
      width: height * 0.1,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    storiesImage: {
      height: height * 0.09,
      width: height * 0.09,
      position: 'absolute',
      borderRadius: 50,
    },
    storiesTitle: {
      marginTop: 5,
      fontSize: sizes.TEXT_SIZES.FONT_H7,
      color: color.TEXT_COLOR_5,
    },
  });
