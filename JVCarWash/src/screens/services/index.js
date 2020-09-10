import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from './style';
import {useColor} from '../../utils/hookUtils';

import * as data from '../../constants/dummyData';
import * as sizes from '../../constants/sizes';
import * as strings from '../../constants/strings';

import JVHeader from '../../components/JVHeader';
import JVServiceAccordion from '../../components/JVServiceAccordion';

const ServiceScreen = (props) => {
  const color = useColor();
  const style = styles(color);

  const renderList = data.SERVICE_DATA.map((data, key) => {
    return <JVServiceAccordion servicesData={data} key={key} />;
  });

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.serviceSafeAreaZero} />
      <SafeAreaView style={style.serviceSafeAreaOne}>
        <View style={styles.serviceContainer}>
          <JVHeader headerTitle={'Services'} />
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
        </View>
        <ScrollView>{renderList}</ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ServiceScreen;
