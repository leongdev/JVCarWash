import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';
import * as sizes from '../../constants/sizes';

const {width, height} = getWindowSizes();
const localHeight = height * 0.19;

export const styles = (color, fold, cardType) =>
  StyleSheet.create({
    cardContainer: {
      alignItems: 'center',
      height: fold ? height * 0.215 : height * 0.33,
      width: width,
      marginVertical: height * 0.015,
    },

    cardFront: {
      flexDirection: 'row',
      backgroundColor: color.HEADER_COLOR,
      borderColor: cardType === 'Activated' ? color.COLOR_1 : color.COLOR_4,
      borderWidth: 1,
      height: localHeight,
      width: width * 0.95,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: 'absolute',
      right: width * 0.025,
      alignItems: 'center',
    },

    cardSettingsBackground: {
      backgroundColor: color.COLOR_5,
      height: '100%',
      width: width * 0.95,
      borderRadius: 10,
      position: 'absolute',
    },

    cardSettingsIcon: {
      backgroundColor: cardType === 'Activated' ? color.COLOR_1 : color.COLOR_4,
      height: height * 0.026,
      width: width * 0.95,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    buttonCard: {
      marginBottom: 3,
      width: width * 0.9,
    },

    chevronIcon: {
      marginTop: -width * 0.008,
    },

    verticalLine: {
      marginRight: width * 0.03,
      borderWidth: 1,
      borderColor: cardType === 'Activated' ? color.COLOR_1 : color.COLOR_4,
      height: width * 0.27,
      width: 1,
    },

    dateBackground: {
      marginHorizontal: width * 0.05,
      borderRadius: 10,
      height: width * 0.27,
      width: width * 0.27,
      backgroundColor: cardType === 'Activated' ? color.COLOR_1 : color.COLOR_4,
      alignItems: 'center',
      justifyContent: 'center',
    },

    serviceListContainer: {
      height: width * 0.3,
      width: width * 0.47,
    },

    serviceListTitle: {
      fontSize: (sizes.TEXT_SIZES.FONT_H4 / 460) * width,
      color: color.TEXT_COLOR_3,
      fontWeight: 'bold',
    },

    dateMonth: {
      fontSize: (sizes.TEXT_SIZES.FONT_H5 / 460) * width,
      color: color.TEXT_COLOR_1,
    },
    dateDay: {
      fontSize: (sizes.TEXT_SIZES.FONT_H0 / 460) * width,
      color: color.TEXT_COLOR_1,
      fontWeight: 'bold',
    },

    dateTime: {
      fontSize: (sizes.TEXT_SIZES.FONT_H6 / 460) * width,
      color: color.TEXT_COLOR_1,
    },

    foldInformationContainer: {
      height: height * 0.1,
      width: width * 0.75,
      position: 'absolute',
      bottom: height * 0.03,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
  });
