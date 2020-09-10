import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

import PropTypes from 'prop-types';
import JVButton from '../JVButton';

import * as sizes from '../../constants/sizes';

export const JVServiceType = {
  Default: 'Default',
  Addition: 'Addition',
  Erasable: 'Erasable',
};

const JVServicePrice = ({
  onPressTrashButton,
  onPressButton,
  onPressInfoButton,
  serviceTitle,
  serviceSubtitle,
  servicePrice,
  servicePriceSubtitle,
  buttonTitle,
  serviceType,
}) => {
  const color = useColor();
  const style = styles(color);

  function renderRightButton() {
    return serviceType === JVServiceType.Erasable ? (
      <TouchableOpacity
        style={style.trashButtonContainer}
        onPress={() => onPressTrashButton()}>
        <FontAwesome
          name={'trash'}
          size={sizes.ICON_SIZES.CHEVRON_ICONS}
          color={color.COLOR_1}
        />
      </TouchableOpacity>
    ) : (
      <View style={style.buttonContainer}>
        <JVButton buttonTitle={buttonTitle} onPress={() => onPressButton()} />
      </View>
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
  onPressTrashButton: PropTypes.func,
  onPressButton: PropTypes.func,
  onPressInfoButton: PropTypes.func,
  serviceTitle: PropTypes.string,
  servicePriceSubtitle: PropTypes.string,
  serviceSubtitle: PropTypes.string,
  servicePrice: PropTypes.string,
  buttonTitle: PropTypes.string,
  serviceType: PropTypes.string,
};

export default memo(JVServicePrice);
