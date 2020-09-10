import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {getWindowSizes} from '../../utils/hookUtils';

export const styles = (color) =>
  StyleSheet.create({
    feedbackContainer: {
      height: getWindowSizes().height * 0.1,
      width: getWindowSizes().width * 0.91,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: color.STORIES_COLOR_SECONDARY,
      marginLeft: 15,
      borderRadius: 15,
    },
    feedbackPerfil: {
      height: getWindowSizes().height * 0.085,
      width: getWindowSizes().height * 0.085,
      borderRadius: 10,
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 5,
    },
    feedbackTitle: {
      fontWeight: 'bold',
      color: color.TEXT_COLOR_5,
      fontSize: sizes.TEXT_SIZES.FONT_H3 * getWindowSizes().width * 0.0015,
    },
    feedbackRateContainer: {
      height: getWindowSizes().height * 0.1,
      width: getWindowSizes().width * 0.29,
      marginLeft: 5,
      justifyContent: 'center',
    },

    feedbackStarContainer: {
      flexDirection: 'row',
    },

    feedbackComment: {
      marginTop: getWindowSizes().height * 0.01,
      color: color.TEXT_COLOR_3,
      height: getWindowSizes().height * 0.09,
      flex: 1,
      fontSize: sizes.TEXT_SIZES.FONT_H5 * getWindowSizes().width * 0.0021,
      marginRight: 5,
    },

    feedbackDate: {
      color: color.TEXT_COLOR_5,
      fontSize: sizes.TEXT_SIZES.FONT_H4 * getWindowSizes().width * 0.0018,
      justifyContent: 'center',
    },
  });
