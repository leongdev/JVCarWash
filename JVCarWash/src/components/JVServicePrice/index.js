import React, {useState, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import * as sizes from '../../constants/sizes';
import JVModal from '../JVModal';
import JVButton, {JVButtonTypes} from '../JVButton';

export const JVServiceType = {
  Check: 'Check',
  Edit: 'Edit',
};

const JVServicePrice = ({
  serviceTitle,
  servicePrice,
  serviceSubtitle,
  serviceType,
  onPressEdit,
}) => {
  const [isSelected, setSelection] = useState(false);
  const [showInfoModal, setInfoModal] = useState(false);
  const color = useColor();
  const style = styles(color);

  /**
   *
   * @returns {JSX.Element}
   */
  function renderEditButton() {
    return (
      <View style={style.trashButtonContainer}>
        <JVButton
          onPress={() => onPressEdit()}
          buttonType={JVButtonTypes.default}
          buttonTitle={'Edit'}
        />
      </View>
    );
  }

  /**
   *
   * @returns {JSX.Element}
   */
  function renderCheckButton() {
    return (
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

  /**
   *
   * @returns {JSX.Element}
   */
  function renderInfoButton() {
    return (
      <TouchableOpacity
        style={style.inforButton}
        onPress={() => setInfoModal(true)}>
        <AntDesign
          name={'infocirlceo'}
          color={color.COLOR_1}
          size={sizes.ICON_SIZES.BANNER_ICON}
        />
      </TouchableOpacity>
    );
  }

  /**
   *
   * @returns {JSX.Element}
   */
  function renderModal() {
    return (
      <JVModal showModal={showInfoModal} onClose={() => setInfoModal(false)}>
        <View style={style.infoContainer}>
          <View style={style.infoTitleContainer}>
            <Text style={style.infoTextTitle}>{serviceTitle}</Text>
            <Text style={style.infoTextTitle}>{servicePrice}</Text>
          </View>

          <View style={style.infoTextContainer}>
            <MaterialCommunityIcon
              size={25}
              color={color.COLOR_2}
              name={'check'}
            />
            <Text style={style.infoTextCheck}>Pre-wash.</Text>
          </View>

          <View style={style.infoTextContainer}>
            <MaterialCommunityIcon
              size={25}
              color={color.COLOR_2}
              name={'check'}
            />
            <Text style={style.infoTextCheck}>Rims & Wheels Deep Clean.</Text>
          </View>

          <View style={style.infoTextContainer}>
            <MaterialCommunityIcon
              size={25}
              color={color.COLOR_2}
              name={'check'}
            />
            <Text style={style.infoTextCheck}>Bugs Removal.</Text>
          </View>
          <View style={style.infoTextContainer}>
            <MaterialCommunityIcon
              size={25}
              color={color.COLOR_2}
              name={'check'}
            />
            <Text style={style.infoTextCheck}>
              Hand Wash w/ 2-Bucked Method.
            </Text>
          </View>
        </View>
      </JVModal>
    );
  }

  return (
    <View>
      <View style={style.priceContainer}>
        <View style={style.contentContainer}>
          <View style={style.titleContainer}>
            <Text style={style.serviceTitle} numberOfLines={1}>
              {serviceTitle}
            </Text>
            {serviceType === JVServiceType.Check ? renderInfoButton() : null}
          </View>
          <View style={style.subtitleContainer}>
            <Text style={style.serviceSubtitle} numberOfLines={1}>
              {serviceSubtitle}
            </Text>
          </View>
        </View>
        <View style={style.textContainer} />
        {serviceType === JVServiceType.Check
          ? renderCheckButton()
          : renderEditButton()}
      </View>
      {renderModal()}
      <View style={style.bottomLine} />
    </View>
  );
};

JVServicePrice.propTypes = {
  serviceTitle: PropTypes.string,
  serviceSubtitle: PropTypes.string,
  serviceType: PropTypes.string,
  onPressEdit: PropTypes.func,
};

export default memo(JVServicePrice);
