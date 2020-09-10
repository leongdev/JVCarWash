import React from 'react';
import {styles} from './style';
import {SafeAreaView, StatusBar, View} from 'react-native';
import JVHeader from '../../components/JVHeader';
import {useColor} from '../../utils/hookUtils';

const ProfileScreen = (props) => {
  const color = useColor();
  const style = styles(color);
  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.profileSafeAreaZero} />
      <SafeAreaView style={style.profileSafeAreaOne}>
        <View style={style.profileContainer}>
          <JVHeader headerTitle={'Profile'} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
