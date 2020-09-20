import React from 'react';
import {styles} from './style';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import JVHeader from '../../components/JVHeader';
import {useColor} from '../../utils/hookUtils';
import JVAppointmentsCard, {
  CardTypes,
} from '../../components/JVAppointmentsCard';

import * as data from '../../constants/dummyData';
import {JVSafeArea} from '../../components/JVSafeArea';

const AppointmentScreen = (props) => {
  const color = useColor();
  const style = styles(color);

  /**
   *
   * @param item
   */
  function renderCardList(item) {
    return (
      <JVAppointmentsCard dateTime={item.dayTime} serviceList={item.services} />
    );
  }

  return (
    <JVSafeArea>
      <JVHeader headerTitle={'Appointments'} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.SCHEDULED_EVENTS}
        renderItem={({item}) => renderCardList(item)}
      />
    </JVSafeArea>
  );
};

export default AppointmentScreen;
