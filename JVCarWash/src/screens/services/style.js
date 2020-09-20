import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';

export const styles = (color) =>
  StyleSheet.create({
    serviceSafeAreaZero: {
      backgroundColor: color.HEADER_COLOR,
      flex: 0,
    },

    serviceSafeAreaOne: {
      backgroundColor: color.BACKGROUND_COLOR,
      flex: 1,
    },

    serviceContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    serviceSearchText: {
      color: color.TEXT_COLOR_7,
      fontSize: 4 * 5,
      flex: 1,
    },

    serviceIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
    },

    scrollView: {
      height: getWindowSizes().height * 0.73,
    },

    serviceSearchBar: {
      marginTop: getWindowSizes().height * 0.02,
      height: 45,
      width: getWindowSizes().width * 0.9,
      backgroundColor: color.SEARCH_COLOR,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
      alignSelf: 'center',
    },

    bookButtonContainer: {
      marginTop: getWindowSizes().height * 0.02,
      width: getWindowSizes().width * 0.8,
      marginHorizontal: 10,
    },

    serviceSearchBarContainer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
