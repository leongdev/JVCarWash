import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';

import * as data from '../../constants/dummyData';
import * as sizes from '../../constants/sizes';
import * as strings from '../../constants/strings';

import JVHeader from '../../components/JVHeader';
import JVServiceAccordion from '../../components/JVServiceAccordion';
import {JVSafeArea} from '../../components/JVSafeArea';

import constants from '../../constants/constants';
import JVButton, {JVButtonTypes} from '../../components/JVButton';
import {texts} from '../../localization';
import JVModal from '../../components/JVModal';
import JVBookModal from '../../components/JVBookModal';

const ServiceScreen = (props) => {
  const color = useColor();
  const style = styles(color);
  const text: Object = texts();
  const [modalIsVisible, setModal] = useState(false);

  const renderList = data.SERVICE_DATA.map((data, key) => {
    return <JVServiceAccordion servicesData={data} key={key} />;
  });

  function renderSeatchButton() {
    return (
      <TouchableOpacity style={style.serviceSearchBar}>
        <View style={style.serviceSearchBarContainer}>
          <View style={style.serviceIconContainer}>
            <MaterialIcons
              name={'search'}
              size={sizes.ICON_SIZES.CHEVRON_ICONS}
              color={color.TEXT_COLOR_7}
            />
          </View>
          <Text style={style.serviceSearchText}>
            {strings.SERVICES_SCREEN.SEARCH_TEXT}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <JVSafeArea>
      <JVHeader headerTitle={'Services'} />
      {constants.SYSTEM.HAS_SERVICE_SEARCH ? renderSeatchButton() : null}
      <ScrollView style={style.scrollView}>{renderList}</ScrollView>
      <View style={style.bookButtonContainer}>
        <JVButton
          buttonType={JVButtonTypes.default}
          onPress={() => setModal(true)}
          buttonTitle={text.SERVICES_SCREEN.BOOKING_BUTTON}
        />
      </View>
      <JVModal showModal={modalIsVisible} onClose={() => setModal(false)}>
        <JVBookModal close={() => setModal(false)} />
      </JVModal>
    </JVSafeArea>
  );
};

export default ServiceScreen;
