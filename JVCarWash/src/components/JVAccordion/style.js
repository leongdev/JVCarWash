import {getWindowSizes} from '../../utils/hookUtils';
import {StyleSheet} from 'react-native';

export const styles = (color) =>
  StyleSheet.create({
    serviceContainer: {
      height: getWindowSizes().height * 0.05,
      width: getWindowSizes().width * 0.9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center',
    },
    bottomLine: {
      marginTop: 5,
      alignSelf: 'center',
      height: 1,
      width: getWindowSizes().width,
      backgroundColor: color.COLOR_5,
    },
    accordionTitle: {
      color: color.TEXT_COLOR_3,
      fontSize: 4 * 5,
      justifyContent: 'center',
    },
  });
