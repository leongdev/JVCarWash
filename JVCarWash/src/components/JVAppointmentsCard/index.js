import React, {useState} from 'react';
import {styles} from './style';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {getWindowSizes, useColor} from '../../utils/hookUtils';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

import * as sizes from '../../constants/sizes';
import * as dateUtils from '../../utils/dateUtils';
import JVButton, {JVButtonTypes} from '../JVButton';

export const CardTypes = {
  Activated: 'Activated',
  Deactivated: 'Deactivated',
};

const JVAppointmentsCard: React.FC = ({dateTime, serviceList}) => {
  const [foldCard, setFold] = useState(true);
  const {width} = getWindowSizes();
  const color: Object = useColor();
  const cardType =
    dateUtils.getDaysBetween(dateTime) >= 0
      ? CardTypes.Activated
      : CardTypes.Deactivated;
  const style: Object = styles(color, foldCard, cardType);

  function renderServiceText(item) {
    return (
      <View>
        <Text style={style.serviceListTitle}>{item.title}</Text>
      </View>
    );
  }
  return (
    <View style={style.cardContainer}>
      <View style={style.cardSettingsBackground}>
        <View style={style.foldInformationContainer}>
          <View>
            <JVButton
              onPress={() => null}
              buttonType={JVButtonTypes.default}
              buttonTitle={'hihi'}
            />
          </View>
          <View>
            <JVButton
              onPress={() => null}
              buttonType={JVButtonTypes.inverted}
              buttonTitle={'hihi'}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setFold(!foldCard)}
          style={style.cardSettingsIcon}>
          <MaterialCommunityIcons
            color={color.TEXT_COLOR_1}
            name={foldCard ? 'chevron-down' : 'chevron-up'}
            size={(sizes.ICON_SIZES.CHEVRON_ICONS / 460) * width}
            style={style.chevronIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={style.cardBackground} />
      <View style={style.cardFront}>
        <View style={style.dateBackground}>
          <Text style={style.dateMonth}>
            {dateUtils.getDayTime(dateTime).month}
          </Text>
          <Text style={style.dateDay}>
            {dateUtils.getDayTime(dateTime).day}
          </Text>
          <Text style={style.dateTime}>
            {dateUtils.getDayTime(dateTime).time}
          </Text>
        </View>
        <View style={style.verticalLine} />
        <View style={style.serviceListContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={serviceList}
            renderItem={({item}) => renderServiceText(item)}
          />
        </View>
      </View>
    </View>
  );
};

JVAppointmentsCard.propTypes = {
  dateTime: PropTypes.string,
  serviceList: PropTypes.array,
};

export default JVAppointmentsCard;
