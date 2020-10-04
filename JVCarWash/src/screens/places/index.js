import React, {useState} from 'react';
import {FlatList, Image, View, TextInput} from 'react-native';
import JVHeader, {JVHeaderTypes} from '../../components/JVHeader';
import {JVSafeArea} from '../../components/JVSafeArea';
import {themes} from '../../themes';
import {styles} from './style';

import * as data from '../../constants/dummyData';
import JVServicePrice, {JVServiceType} from '../../components/JVServicePrice';
import JVButton, {JVButtonTypes} from '../../components/JVButton';
import JVModal from '../../components/JVModal';
import {texts} from '../../localization';

const PlacesScreen = ({navigation}) => {
  const [showModal, setModal] = useState(false);
  const color = themes();
  const style = styles(color);
  const text = texts();

  function renderPlace(item) {
    return (
      <JVServicePrice
        onPressEdit={() => null}
        serviceType={JVServiceType.Edit}
        serviceTitle={item.title}
        serviceSubtitle={item.street_adress}
      />
    );
  }

  function renderNewPlacesModal() {
    return (
      <JVModal onClose={() => setModal(false)} showModal={showModal}>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.TITLE}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.STREET_ADDRESS}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.SUIT_APT}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.CITY}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.STATE}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={text.PLACES_SCREENS.ZIP_CODE}
          />
        </View>
        <View style={style.modalButtonContainer}>
          <JVButton
            onPress={() => null}
            buttonType={JVButtonTypes.default}
            buttonTitle={'Add'}
          />
        </View>
      </JVModal>
    );
  }

  return (
    <JVSafeArea>
      <JVHeader
        headerTitle={'Places'}
        type={JVHeaderTypes.back}
        navigation={navigation}
      />
      <Image
        style={style.bannerImage}
        source={color.IMAGE_LOCATION}
        resizeMode={'cover'}
      />
      <View style={style.placesContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data.USER_PLACES}
          renderItem={({item}) => renderPlace(item)}
        />
      </View>
      <View style={style.buttonContainer}>
        <JVButton
          buttonType={JVButtonTypes.inverted}
          onPress={() => setModal(true)}
          buttonTitle={'NEW PLACE'}
        />
      </View>
      {renderNewPlacesModal()}
    </JVSafeArea>
  );
};

export default PlacesScreen;
