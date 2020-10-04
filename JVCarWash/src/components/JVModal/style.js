import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';
const {width, height} = getWindowSizes();

export const styles = (color) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    bookContainer: {
      alignSelf: 'center',
      backgroundColor: color.SEARCH_COLOR,
      width: width * 0.9,
      borderRadius: 20,
      alignItems: 'center',
    },
    iconContainer: {
      height: height * 0.05,
      width: height * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: height * 0.01,
      marginTop: height * 0.01,
    },
    calendarHeader: {
      height: height * 0.05,
      width: width * 0.9,
    },
  });
