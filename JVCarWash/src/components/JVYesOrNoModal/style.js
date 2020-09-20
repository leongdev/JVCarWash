import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';
const {width, height} = getWindowSizes();

export const styles = (color) =>
  StyleSheet.create({
    container: {
      height: height * 0.25,
    },

    buttonsContainer: {
      height: height * 0.07,
      flexDirection: 'row',
      width: width * 0.9,
    },

    buttonView: {
      height: height * 0.05,
      flex: 1,
      marginHorizontal: width * 0.025,
    },

    modalTitle: {
      marginVertical: height * 0.04,
      fontSize: height * 0.04,
      color: color.TEXT_COLOR_7,
      textAlign: 'center',
    },
  });
