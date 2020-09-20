import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import PropTypes from 'prop-types';
import {useColor} from '../../utils/hookUtils';
import JVButton, {JVButtonTypes} from '../JVButton';

const JVYesOrNoModal: React.FC = ({
  modalTitle,
  buttonYesTitle,
  buttonNoTitle,
  onPressYes,
  onPressNo,
}) => {
  const color = useColor();
  const style = styles(color);
  return (
    <View style={style.container}>
      <Text style={style.modalTitle}>{modalTitle}</Text>
      <View style={style.buttonsContainer}>
        <View style={style.buttonView}>
          <JVButton
            buttonTitle={buttonYesTitle}
            onPress={() => onPressYes()}
            buttonType={JVButtonTypes.inverted}
          />
        </View>
        <View style={style.buttonView}>
          <JVButton
            buttonTitle={buttonNoTitle}
            onPress={() => onPressNo()}
            buttonType={JVButtonTypes.default}
          />
        </View>
      </View>
    </View>
  );
};
JVYesOrNoModal.propTypes = {
  modalTitle: PropTypes.string,
  buttonYesTitle: PropTypes.string,
  buttonNoTitle: PropTypes.string,
  onPressYes: PropTypes.func,
  onPressNo: PropTypes.func,
};

export default memo(JVYesOrNoModal);
