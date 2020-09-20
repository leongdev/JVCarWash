import React, {useState} from 'react';
import {calendarSyles, styles} from './style';
import {FlatList, ScrollView, View} from 'react-native';
import {useColor} from '../../utils/hookUtils';
import Calendar from 'react-native-calendars/src/calendar';

import * as data from '../../constants/dummyData';

import JVButton, {JVButtonTypes} from '../JVButton';
import PropTypes from 'prop-types';

const JVBookModal: React.FC = ({close}) => {
  const [getDate, setDate] = useState('2018-03-28');
  const [getTime, setTime] = useState(0);
  const color = useColor();
  const style = styles(color);

  return (
    <View style={style.bookContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar
          markingType={'custom'}
          style={style.calendarContainer}
          onDayPress={(day) => setDate(day.dateString)}
          theme={calendarSyles(color)}
          markedDates={{
            [getDate]: {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: color.COLOR_3,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: color.COLOR_1,
                },
                text: {
                  color: color.TEXT_COLOR_3,
                  fontWeight: 'bold',
                },
              },
            },
          }}
        />
        <View style={style.bottomLine} />
        <View style={style.timeListContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={data.FREE_TIME}
            renderItem={({item, index}) => (
              <View style={style.buttonContainer}>
                <JVButton
                  buttonTitle={item.time}
                  onPress={() => setTime(index)}
                  buttonType={
                    getTime === index
                      ? JVButtonTypes.activated
                      : JVButtonTypes.deactivated
                  }
                />
              </View>
            )}
            horizontal
          />
        </View>
        <View style={style.bottomLine} />
      </ScrollView>
      <View style={style.buttonsBottom}>
        <View style={style.buttonBottomContainer}>
          <JVButton
            buttonTitle={'CANCEL'}
            buttonType={JVButtonTypes.inverted}
            onPress={close}
          />
        </View>
        <View style={style.buttonBottomContainer}>
          <JVButton
            buttonTitle={'BOOK'}
            buttonType={JVButtonTypes.default}
            onPress={close}
          />
        </View>
      </View>
    </View>
  );
};

JVBookModal.propTypes = {
  close: PropTypes.func,
};

export default JVBookModal;
