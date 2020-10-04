import {StyleSheet} from 'react-native';
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
  });
