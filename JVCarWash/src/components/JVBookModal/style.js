import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';

const {width, height} = getWindowSizes();

export const styles = (color) =>
  StyleSheet.create({
    bookContainer: {
      height: height * 0.7,
    },

    calendarContainer: {
      alignSelf: 'center',
      backgroundColor: color.SEARCH_COLOR,
      width: width * 0.87,
    },

    calendarHeader: {
      height: height * 0.05,
      width: width * 0.9,
    },

    buttonsBottom: {
      width: width * 0.9,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: width * 0.03,
    },

    buttonBottomContainer: {
      flex: 1,
      marginHorizontal: 10,
    },

    iconContainer: {
      height: height * 0.05,
      width: height * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: height * 0.005,
      marginTop: height * 0.005,
    },

    bottomLine: {
      width: width * 0.9,
      borderWidth: 1,
      borderColor: color.COLOR_5,
      marginVertical: 5,
    },

    timeListContainer: {
      width: width * 0.9,
    },

    buttonContainer: {
      width: width * 0.25,
      marginHorizontal: 5,
    },
  });

export const calendarSyles = (color) => {
  return {
    calendarBackground: color.SEARCH_COLOR,
    todayTextColor: color.COLOR_1,
    selectedDayTextColor: 'white',
    textDisabledColor: color.TEXT_COLOR_8,
    dayTextColor: color.TEXT_COLOR_9,
    arrowColor: color.COLOR_1,
    textSectionTitleColor: color.COLOR_2,
    monthTextColor: color.COLOR_1,
  };
};
