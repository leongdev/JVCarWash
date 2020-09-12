import {StyleSheet} from 'react-native';
import {getWindowSizes} from '../../utils/hookUtils';

import * as sizes from '../../constants/sizes';

const localWith = getWindowSizes().width * 0.9;
const localHeight = getWindowSizes().height * 0.5;

export const styles = (color) =>
  StyleSheet.create({
    bannerContainer: {
      height: localHeight,
      width: localWith,
    },

    bannerImage: {
      height: localHeight,
      width: localWith,
      position: 'absolute',
      borderRadius: 20,
    },
    gradient: {
      width: localWith,
      height: localHeight,
      position: 'absolute',
      borderRadius: 20,
    },
    bannerContentContainer: {
      position: 'absolute',
      bottom: 0,
      marginBottom: localHeight * 0.1,
    },
    bannerTitle: {
      fontWeight: 'bold',
      marginLeft: 20,
      fontSize: sizes.TEXT_SIZES.FONT_H2,
      color: color.COLOR_1,
    },
    bannerItemText: {
      marginLeft: 5,
      fontSize: sizes.TEXT_SIZES.FONT_H6,
      color: color.TEXT_COLOR_1,
      marginTop: 5,
      width: localWith * 0.8,
    },
    bannerItemTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bannerItemTextIcon: {
      width: 15,
      height: 15,
      marginLeft: 20,
    },
  });
