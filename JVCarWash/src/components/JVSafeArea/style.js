import {StyleSheet} from 'react-native';
export const styles = (color) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    safeAreaZero: {
      backgroundColor: color.HEADER_COLOR,
      flex: 0,
    },

    safeAreaOne: {
      backgroundColor: color.BACKGROUND_COLOR,
      flex: 1,
    },
  });
