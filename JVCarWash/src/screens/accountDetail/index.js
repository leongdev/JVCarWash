import React from 'react';
import JVHeader, {JVHeaderTypes} from '../../components/JVHeader';
import {JVSafeArea} from '../../components/JVSafeArea';

const AccountDetail = ({navigation}) => {
  return (
    <JVSafeArea>
      <JVHeader
        headerTitle={'Account Detail'}
        type={JVHeaderTypes.back}
        navigation={navigation}
      />
    </JVSafeArea>
  );
};

export default AccountDetail;
