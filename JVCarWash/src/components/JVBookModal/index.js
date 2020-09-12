import React, {useState} from 'react';
import {calendarSyles, styles} from './style';
import {TouchableOpacity, View, ScrollView, FlatList} from 'react-native';
import {useColor} from '../../utils/hookUtils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-calendars/src/calendar';

import * as data from '../../constants/dummyData';
import * as sizes from '../../constants/sizes';

import JVButton, {JVButtonTypes} from '../JVButton';
import JVServicePrice, {JVServiceType} from '../JVServicePrice';
import PropTypes from 'prop-types';

const JVBookModal = ({close}) => {
  const [getDate, setDate] = useState('2018-03-28');
  const [getTime, setTime] = useState(0);
  const color = useColor();
  const style = styles(color);

  return (
    <View style={style.bookContainer}>
      <View style={style.calendarHeader}>
        <TouchableOpacity onPress={close} style={style.iconContainer}>
          <AntDesign
            name={'close'}
            color={color.COLOR_1}
            size={sizes.ICON_SIZES.CHEVRON_ICONS}
          />
        </TouchableOpacity>
      </View>
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
        <JVServicePrice
          servicePrice={data.SERVICE_DATA[0].services[0].price}
          servicePriceSubtitle={data.FREE_TIME[getTime].time}
          serviceSubtitle={data.SERVICE_DATA[0].services[0].subtitle}
          serviceTitle={data.SERVICE_DATA[0].services[0].title}
          onPressTrashButton={() => null}
          serviceType={JVServiceType.Erasable}
        />
        <JVServicePrice
          servicePrice={data.SERVICE_DATA[0].services[1].price}
          servicePriceSubtitle={data.FREE_TIME[getTime].time}
          serviceSubtitle={data.SERVICE_DATA[0].services[1].subtitle}
          serviceTitle={data.SERVICE_DATA[0].services[1].title}
          onPressTrashButton={() => null}
          serviceType={JVServiceType.Erasable}
        />
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
