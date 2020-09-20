import React, {memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as sizes from '../../constants/sizes';

export const JVServiceType = {
  Default: 'Default',
  Addition: 'Addition',
  Erasable: 'Erasable',
};

const JVServicePrice = ({
  onPressInfoButton,
  serviceTitle,
  serviceSubtitle,
  servicePrice,
  servicePriceSubtitle,
  serviceType,
}) => {
  const [isSelected, setSelection] = useState(false);
  const color = useColor();
  const style = styles(color);

  function renderRightButton() {
    return serviceType === JVServiceType.Erasable ? (
      <TouchableOpacity style={style.trashButtonContainer} onPress={() => null}>
        <FontAwesome
          name={'trash'}
          size={sizes.ICON_SIZES.CHEVRON_ICONS}
          color={color.COLOR_1}
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => setSelection(!isSelected)}
        style={style.buttonContainer}>
        <View
          style={isSelected ? style.checkButtonSelected : style.checkButton}>
          {isSelected ? (
            <Icon
              style={style.checkIcon}
              name={'check'}
              size={30}
              color={color.TEXT_COLOR_1}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={style.priceContainer}>
        <View style={style.contentContainer}>
          <View style={style.titleContainer}>
            <Text style={style.serviceTitle} numberOfLines={1}>
              {serviceTitle}
            </Text>
            {onPressInfoButton ? (
              <TouchableOpacity
                style={style.inforButton}
                onPress={() => onPressInfoButton()}>
                <AntDesign
                  name={'infocirlceo'}
                  color={color.COLOR_1}
                  size={sizes.ICON_SIZES.BANNER_ICON}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={style.subtitleContainer}>
            <Text style={style.serviceSubtitle} numberOfLines={1}>
              {serviceSubtitle}
            </Text>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.price}>
            {serviceType === JVServiceType.Addition ? '+' : null}
            {servicePrice}
          </Text>
          {serviceType === JVServiceType.Erasable ? (
            <Text style={style.priceSubtitle} numberOfLines={1}>
              {servicePriceSubtitle}
            </Text>
          ) : null}
        </View>
        {renderRightButton()}
      </View>
      <View style={style.bottomLine} />
    </>
  );
};

JVServicePrice.propTypes = {
  onPressInfoButton: PropTypes.func,
  serviceTitle: PropTypes.string,
  servicePriceSubtitle: PropTypes.string,
  serviceSubtitle: PropTypes.string,
  servicePrice: PropTypes.string,
  serviceType: PropTypes.string,
};

export default memo(JVServicePrice);
