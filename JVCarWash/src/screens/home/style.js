import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';

export const styles = (color) =>
  StyleSheet.create({
    homeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeSafeAreaZero: {
      backgroundColor: color.HEADER_COLOR,
      flex: 0,
    },
    homeSafeAreaOne: {
      flex: 1,
      backgroundColor: color.BACKGROUND_COLOR,
    },

    homeFlatList: {
      marginTop: 15,
      width: getWindowSizes().width,
      marginBottom: 15,
      paddingLeft: getWindowSizes().width * 0.03,
    },

    homeFeedbackFlatList: {
      width: getWindowSizes().width,
    },

    homeScrollView: {
      width: getWindowSizes().width,
      height: getWindowSizes().height * 0.82,
    },

    paginationDotActive: {
      width: 10,
      height: 10,
      marginHorizontal: -10,
      borderRadius: 10,
      backgroundColor: color.COLOR_1,
    },
    paginationDotInactive: {
      width: 10,
      height: 10,
      marginHorizontal: -10,
      borderRadius: 10,
      backgroundColor: color.COLOR_2,
    },
  });
