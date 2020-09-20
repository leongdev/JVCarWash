import React from 'react';
import {styles} from './style';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useColor} from '../../utils/hookUtils';

function JVSafeArea({children}) {
  const color = useColor();
  const style = styles(color);
  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.safeAreaZero} />
      <SafeAreaView style={style.safeAreaOne}>
        <View style={style.container}>{children}</View>
      </SafeAreaView>
    </>
  );
}

export {JVSafeArea};
