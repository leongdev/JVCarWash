import React from 'react';
import {styles} from './style';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import JVHeader from '../../components/JVHeader';
import {useColor} from '../../utils/hookUtils';
import JVAppointmentsCard, {
  CardTypes,
} from '../../components/JVAppointmentsCard';

import * as data from '../../constants/dummyData';

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
    <>
      <StatusBar />
      <SafeAreaView style={style.appointmentSafeAreaZero} />
      <SafeAreaView style={style.appointmentSafeAreaOne}>
        <View style={style.appointmentContainer}>
          <JVHeader headerTitle={'Appointments'} />
          <FlatList
            keyExtractor={(item) => item.id}
            data={data.SCHEDULED_EVENTS}
            renderItem={({item}) => renderCardList(item)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AppointmentScreen;
