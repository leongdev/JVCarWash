import React, {memo, useContext} from 'react';
import {ThemeContext} from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {FlatList, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as sizes from '../../constants/sizes';
import PropTypes from 'prop-types';

const JVBanner = ({bannerItem}) => {
  const item = bannerItem;
  const textData = item.items;
  const color = useContext(ThemeContext);
  const style = styles(color);

  /**
   *
   * @param item
   */
  function renderTexts(item) {
    return (
      <View style={style.bannerItemTextContainer}>
        <View style={style.bannerItemTextIcon}>
          <MaterialCommunityIcons
            name={'check'}
            size={sizes.ICON_SIZES.BANNER_ICON}
            color={color.TEXT_COLOR_1}
          />
        </View>
        <Text style={style.bannerItemText}>{item.item}</Text>
      </View>
    );
  }

  return (
    <View style={style.bannerContainer}>
      <Image
        style={style.bannerImage}
        source={{uri: item.image}}
        resizeMode={'cover'}
      />
      <LinearGradient
        colors={[color.TRANSPAREDNT_COLOR, color.STORIES_GRADIENT_SECONDARY]}
        style={style.gradient}
      />
      <View style={style.bannerContentContainer}>
        <Text style={style.bannerTitle}>{item.title}</Text>
        <FlatList
          keyExtractor={(item) => item.item}
          data={textData}
          renderItem={(item) => renderTexts(item.item)}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

JVBanner.propTypes = {
  bannerItem: PropTypes.object,
};

export default memo(JVBanner);
