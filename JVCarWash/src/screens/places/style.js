import {StyleSheet} from 'react-native';
import {getWindowPercentage} from '../../utils/hookUtils';
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

    bannerImage: {
      height: getWindowPercentage(60).width,
      width: getWindowPercentage(90).width,
    },

    modalButtonContainer: {
      marginVertical: getWindowPercentage(5).width,
    },

    textInputContainer: {
      marginVertical: 5,
      height: getWindowPercentage(4).height,
      width: getWindowPercentage(80).width,
      borderBottomWidth: 1,
      borderBottomColor: color.COLOR_4,
      alignItems: 'center',
    },
    textInput: {
      color: color.TEXT_COLOR_3,
      alignSelf: 'center',
      height: getWindowPercentage(4).height,
      width: getWindowPercentage(80).width,
    },

    placesContainer: {
      marginTop: -getWindowPercentage(10).width,
      width: getWindowPercentage(90).width,
      height: getWindowPercentage(47).height,
    },

    buttonContainer: {
      width: getWindowPercentage(100).width,
      height: getWindowPercentage(18).width,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.BACKGROUND_COLOR,
      paddingHorizontal: 15,
    },
  });
