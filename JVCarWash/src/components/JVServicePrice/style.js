import {getWindowSizes} from '../../utils/hookUtils';
import {StyleSheet} from 'react-native';

const height = getWindowSizes().height;
const width = getWindowSizes().width;

export const styles = (color) =>
  StyleSheet.create({
    priceContainer: {
      height: height * 0.08,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingHorizontal: 10,
    },

    contentContainer: {
      height: height * 0.08,
      width: width * 0.6,
      marginTop: 4,
    },

    checkIcon: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: height * 0.005,
    },

    textContainer: {
      justifyContent: 'center',
      alignSelf: 'flex-end',
      height: height * 0.08,
      width: width * 0.13,
      marginRight: -width * 0.02,
    },

    buttonContainer: {
      height: height * 0.08,
      width: width * 0.2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkButton: {
      borderColor: color.COLOR_1,
      borderWidth: 1,
      backgroundColor: color.HEADER_COLOR,
      width: width * 0.1,
      height: width * 0.1,
      borderRadius: width * 0.02,
    },

    checkButtonSelected: {
      backgroundColor: color.COLOR_1,
      width: width * 0.1,
      height: width * 0.1,
      borderRadius: width * 0.02,
    },

    titleContainer: {
      height: height * 0.04,
      width: width * 0.4,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },

    price: {
      color: color.TEXT_COLOR_3,
      fontSize: 5 * 5,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: -width * 0.04,
    },

    priceSubtitle: {
      color: color.TEXT_COLOR_3,
      fontSize: 2 * 5,
      alignSelf: 'flex-start',
      marginLeft: -width * 0.04,
    },

    serviceTitle: {
      color: color.TEXT_COLOR_3,
      fontSize: 4 * 5,
      fontWeight: 'bold',
      marginLeft: -6,
    },

    inforButton: {
      width: width * 0.05,
      height: width * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
    },

    subtitleContainer: {
      width: width * 0.4,
      height: height * 0.03,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -5,
      marginLeft: 5,
    },

    serviceSubtitle: {
      color: color.TEXT_COLOR_3,
      fontSize: 5 * 3,
    },

    bottomLine: {
      marginTop: 5,
      alignSelf: 'center',
      height: 1,
      width: width * 0.9,
      backgroundColor: color.COLOR_5,
    },

    trashButtonContainer: {
      width: width * 0.2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    infoTextTitle: {
      marginTop: 20,
      fontSize: width * 0.07,
      color: color.COLOR_2,
      marginBottom: 5,
    },

    infoTextContainer: {
      marginLeft: 40,
      flexDirection: 'row',
      alignItems: 'center',
    },

    infoTextCheck: {
      fontSize: width * 0.045,
      color: color.COLOR_2,
      width: width * 0.85,
    },

    infoContainer: {
      height: height * 0.3,
    },

    infoTitleContainer: {
      marginBottom: 5,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.8,
      borderBottomWidth: 1,
      borderColor: color.COLOR_4,
    },
  });
