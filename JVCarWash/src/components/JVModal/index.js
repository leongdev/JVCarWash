import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {useColor} from '../../utils/hookUtils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as sizes from '../../constants/sizes';

const JVModal: React.FC = ({children, showModal, onClose}) => {
  const color = useColor();
  const style = styles(color);
  return (
    <Modal isVisible={showModal} onBackdropPress={onClose}>
      <View style={style.container}>
        <View style={style.bookContainer}>
          <View style={style.calendarHeader}>
            <TouchableOpacity onPress={onClose} style={style.iconContainer}>
              <AntDesign
                name={'close'}
                color={color.COLOR_1}
                size={sizes.ICON_SIZES.CHEVRON_ICONS}
              />
            </TouchableOpacity>
          </View>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};
JVModal.propTypes = {
  children: PropTypes.any,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default memo(JVModal);
