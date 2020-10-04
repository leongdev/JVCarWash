import React, {memo, useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import JVServicePrice, {JVServiceType} from '../JVServicePrice';
import JVAccordion, {JVAccordionTypes} from '../JVAccordion';
import {useColor} from '../../utils/hookUtils';
import {styles} from './style';

const JVServiceAccordion: React.FC = ({servicesData}) => {
  const color = useColor();
  const style = styles(color);

  const renderList: View = servicesData.services.map((data, key) => {
    return (
      <JVServicePrice
        servicePrice={data.price}
        onPressEdit={() => null}
        serviceSubtitle={data.subtitle}
        serviceTitle={data.title}
        serviceType={JVServiceType.Check}
        key={key}
      />
    );
  });

  return (
    <View style={style.serviceElement}>
      <JVAccordion title={servicesData.title} type={JVAccordionTypes.default}>
        {renderList}
      </JVAccordion>
    </View>
  );
};

JVServiceAccordion.propTypes = {
  servicesData: PropTypes.object,
};

export default memo(JVServiceAccordion);
