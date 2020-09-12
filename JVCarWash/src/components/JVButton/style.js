import * as sizes from '../../constants/sizes';
import {StyleSheet} from 'react-native';

export const styles = (color) =>
  StyleSheet.create({
    buttonContainerDefault: {
      backgroundColor: color.COLOR_1,
      borderColor: color.COLOR_1,
      borderWidth: 1,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainerInverted: {
      backgroundColor: color.TRANSPAREDNT_COLOR,
      borderColor: color.COLOR_1,
      borderWidth: 2,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainerDeactivated: {
      backgroundColor: color.TRANSPAREDNT_COLOR,
      borderColor: color.COLOR_4,
      borderWidth: 1,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainerActivated: {
      backgroundColor: color.COLOR_3,
      borderColor: color.COLOR_1,
      borderWidth: 1,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonContainerWhite: {
      backgroundColor: color.TEXT_COLOR_1,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonContainerWhiteInveted: {
      borderColor: color.TEXT_COLOR_1,
      borderWidth: 1,
      height: 40,
      alignSelf: 'stretch',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleDefault: {
      color: color.TEXT_COLOR_1,
      fontSize: sizes.TEXT_SIZES.FONT_H5,
    },
    titleInversed: {
      color: color.TEXT_COLOR_2,
      fontSize: sizes.TEXT_SIZES.FONT_H5,
    },
    titleDeactivated: {
      color: color.TEXT_COLOR_4,
      fontSize: 15,
    },
    titleActivated: {
      color: color.TEXT_COLOR_3,
      fontSize: 15,
    },
    titleWhite: {
      color: color.COLOR_1,
      fontSize: 15,
    },
    titleWhiteInverted: {
      color: color.TEXT_COLOR_1,
      fontSize: 15,
    },
  });
