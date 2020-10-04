import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {getWindowSizes} from '../../utils/hookUtils';

export const styles = (color) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      backgroundColor: color.HEADER_COLOR,
      height: getWindowSizes().height * 0.07,
      width: getWindowSizes().width,
      alignItems: 'center',
    },
    headerTitle: {
      marginLeft: sizes.LAYOUT_SIZES.MARGIN_LEFT,
      color: color.TEXT_COLOR_5,
      fontWeight: 'bold',
      fontSize: sizes.TEXT_SIZES.FONT_H5,
    },
    iconContainer: {
      marginRight: sizes.LAYOUT_SIZES.MARGIN_RIGHT,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 40,
      width: 80,
    },
    iconContainerLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 40,
      width: 35,
    },
    headerGobackIcon: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerIcon: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{scaleX: -1}],
    },
    headerBellNotification: {
      backgroundColor: color.COLOR_1,
      borderColor: color.HEADER_COLOR,
      borderWidth: 1,
      borderRadius: 20,
      height: 13,
      width: 13,
      position: 'absolute',
      top: 7,
      left: 0,
    },
    headerCommentNotification: {
      backgroundColor: color.COLOR_1,
      borderColor: color.HEADER_COLOR,
      borderWidth: 1,
      borderRadius: 20,
      height: 13,
      width: 13,
      position: 'absolute',
      top: 7,
      left: 4,
    },
    headerNotification: {
      backgroundColor: color.COLOR_1,
      borderColor: color.HEADER_COLOR,
      borderWidth: 1,
      borderRadius: 30,
      height: 13,
      width: 13,
      position: 'absolute',
      top: 7,
      left: 0,
    },
  });
