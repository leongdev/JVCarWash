import React, {memo} from 'react';
import {styles} from './style';
import {AntDesign} from '@expo/vector-icons';
import {Image, Text, View} from 'react-native';

import {useColor} from '../../utils/hookUtils';

import * as dateUtils from '../../utils/dateUtils';
import * as sizes from '../../constants/sizes';

import PropTypes from 'prop-types';

const JVFeedback = ({imageUrl, userName, star, date, comment}) => {
  const color = useColor();
  const style = styles(color);
  const margin = 1;
  return (
    <View style={style.feedbackContainer}>
      <Image style={style.feedbackPerfil} source={{uri: imageUrl}} />
      <View style={style.feedbackRateContainer}>
        <Text>{userName}</Text>
        <View style={style.feedbackStarContainer}>
          <AntDesign
            style={{marginRight: margin}}
            name={'star'}
            color={star >= 1 ? color.COLOR_1 : color.TEXT_COLOR_5}
            size={sizes.ICON_SIZES.CHEVRON_ICONS_SMALL}
          />
          <AntDesign
            style={{marginHorizontal: margin}}
            name={'star'}
            color={star >= 2 ? color.COLOR_1 : color.TEXT_COLOR_5}
            size={sizes.ICON_SIZES.CHEVRON_ICONS_SMALL}
          />
          <AntDesign
            style={{marginHorizontal: margin}}
            name={'star'}
            color={star >= 3 ? color.COLOR_1 : color.TEXT_COLOR_5}
            size={sizes.ICON_SIZES.CHEVRON_ICONS_SMALL}
          />
          <AntDesign
            style={{marginHorizontal: margin}}
            name={'star'}
            color={star >= 4 ? color.COLOR_1 : color.TEXT_COLOR_5}
            size={sizes.ICON_SIZES.CHEVRON_ICONS_SMALL}
          />
          <AntDesign
            style={{marginLeft: margin}}
            name={'star'}
            color={star >= 5 ? color.COLOR_1 : color.TEXT_COLOR_5}
            size={sizes.ICON_SIZES.CHEVRON_ICONS_SMALL}
          />
        </View>
        <Text style={style.feedbackDate}>
          {dateUtils.getFullCurrentDay(date)}
        </Text>
      </View>
      <Text style={style.feedbackComment} numberOfLines={3}>
        {comment}
      </Text>
    </View>
  );
};

JVFeedback.propTypes = {
  star: PropTypes.number,
  imageUrl: PropTypes.string,
  userName: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,
};

export default memo(JVFeedback);
