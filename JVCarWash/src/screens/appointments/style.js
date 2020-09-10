import {StyleSheet} from 'react-native';
export const styles = (color) =>
  StyleSheet.create({
    appointmentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },

    appointmentSafeAreaZero: {
      backgroundColor: color.HEADER_COLOR,
      flex: 0,
    },

    appointmentSafeAreaOne: {
      backgroundColor: color.BACKGROUND_COLOR,
      flex: 1,
    },
  });
