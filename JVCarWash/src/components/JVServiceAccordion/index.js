import React, {memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import JVServicePrice, {JVServiceType} from '../JVServicePrice';
import Modal from 'react-native-modal';
import JVBookModal from '../JVBookModal';

const JVServiceAccordion = ({servicesData}) => {
  const [switcher, setSwitcher] = useState(false);
  const color = useColor();
  const style = styles(color);
  const [modalIsVisible, setModal] = useState(false);

  const renderList = servicesData.services.map((data, key) => {
    return (
      <JVServicePrice
        onPressButton={() => setModal(true)}
        onPressInfoButton={() => null}
        servicePrice={data.price}
        serviceSubtitle={data.subtitle}
        serviceTitle={data.title}
        buttonTitle={'ADD'}
        serviceType={JVServiceType.Default}
        key={key}
      />
    );
  });

  return (
    <>
      <View style={style.bottomLine} />
      <TouchableOpacity
        style={style.serviceContainer}
        onPress={() => setSwitcher(!switcher)}>
        <Text style={style.accordionTitle}>{servicesData.title}</Text>
        <MaterialCommunityIcons
          name={switcher ? 'chevron-up' : 'chevron-down'}
          size={30}
          color={color.COLOR_6}
          style={{marginRight: 20}}
        />
      </TouchableOpacity>
      <View style={style.bottomLine} />
      <View>{switcher ? renderList : null}</View>
      <Modal isVisible={modalIsVisible}>
        <JVBookModal close={() => setModal(false)} />
      </Modal>
    </>
  );
};

JVServiceAccordion.propTypes = {
  servicesData: PropTypes.object,
};

export default memo(JVServiceAccordion);
