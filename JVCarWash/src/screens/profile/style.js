import {StyleSheet} from 'react-native';
import {getWindowPercentage, getWindowSizes} from '../../utils/hookUtils';
export const styles = (color) =>
  StyleSheet.create({
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    profileSafeAreaZero: {
      backgroundColor: color.HEADER_COLOR,
      flex: 0,
    },

    profileSafeAreaOne: {
      backgroundColor: color.BACKGROUND_COLOR,
      flex: 1,
    },

    logOutButtonContainer: {
      marginTop: 50,
      width: getWindowPercentage(90).width,
    },

    imageLogo: {
      width: getWindowPercentage(90).width,
      height: getWindowPercentage(60).width,
    },
  });
