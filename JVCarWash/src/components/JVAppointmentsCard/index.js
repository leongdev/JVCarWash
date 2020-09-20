import React, {useState} from 'react';
import {styles} from './style';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {getWindowSizes, useColor} from '../../utils/hookUtils';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import * as sizes from '../../constants/sizes';
import * as dateUtils from '../../utils/dateUtils';

import JVButton, {JVButtonTypes} from '../JVButton';
import {texts} from '../../localization';
import JVModal from '../JVModal';
import JVBookModal from '../JVBookModal';
import JVYesOrNoModal from '../JVYesOrNoModal';

export const CardTypes = {
  Activated: 'Activated',
  Deactivated: 'Deactivated',
};

const JVAppointmentsCard: React.FC = ({dateTime, serviceList}) => {
  const [modalIsVisible, setModal] = useState(false);
  const [cancelModalIsVisible, setCancelModal] = useState(false);
  const [foldCard, setFold] = useState(true);
  const {width} = getWindowSizes();
  const color: Object = useColor();
  const cardType =
    dateUtils.getDaysBetween(dateTime) >= 0
      ? CardTypes.Activated
      : CardTypes.Deactivated;
  const style: Object = styles(color, foldCard, cardType);
  const text: Object = texts();

  /**
   * Renders Service Text
   * @param item
   * @returns {JSX.Element}
   */
  function renderServiceText(item: Object): View {
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
          <View style={style.buttonCard}>
            <JVButton
              onPress={() => setModal(true)}
              buttonType={
                cardType === CardTypes.Activated
                  ? JVButtonTypes.default
                  : JVButtonTypes.appointment
              }
              buttonTitle={text.APPOINTMENTS_SCREEN.RESCHEDULE_BUTTON}
            />
          </View>
          <View style={style.buttonCard}>
            <JVButton
              onPress={() => setCancelModal(true)}
              buttonType={
                cardType === CardTypes.Activated
                  ? JVButtonTypes.inverted
                  : JVButtonTypes.appointmentInverted
              }
              buttonTitle={text.APPOINTMENTS_SCREEN.CANCEL_BUTTON}
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
      <JVModal showModal={modalIsVisible} onClose={() => setModal(false)}>
        <JVBookModal close={() => setModal(false)} />
      </JVModal>
      <JVModal
        showModal={cancelModalIsVisible}
        onClose={() => setCancelModal(false)}>
        <JVYesOrNoModal
          buttonNoTitle={text.APPOINTMENTS_SCREEN.MODAL_NO_BUTTON_TITLE}
          buttonYesTitle={text.APPOINTMENTS_SCREEN.MODAL_YES_BUTTON_TITLE}
          modalTitle={text.APPOINTMENTS_SCREEN.CANCEL_MODAL_TITLE}
          onPressNo={() => setCancelModal(false)}
          onPressYes={() => setCancelModal(false)}
        />
      </JVModal>
    </View>
  );
};

JVAppointmentsCard.propTypes = {
  dateTime: PropTypes.string,
  serviceList: PropTypes.array,
};

export default JVAppointmentsCard;
