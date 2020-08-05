import React, {memo} from 'react';
import {
  JVButtonContainerDefault,
  JVButtonTitleDefault,
  JVButtonContainerInversed,
  JVButtonTitleInversed,
  JVButtonContainerDeactivated,
  JVButtonTitleDeactivated,
  JVButtonContainerActivated,
  JVButtonTitleActivated,
} from './style';
const JVButton = (props) => {
  /**
   *  Render Activated Button
   */
  function renderButtonActivated() {
    return (
      <JVButtonContainerActivated onPress={() => props.onPress}>
        <JVButtonTitleActivated>{props.buttonTitle}</JVButtonTitleActivated>
      </JVButtonContainerActivated>
    );
  }
  /**
   * Render Deactivated Button
   */
  function renderButtonDeactivated() {
    return (
      <JVButtonContainerDeactivated onPress={() => props.onPress}>
        <JVButtonTitleDeactivated>{props.buttonTitle}</JVButtonTitleDeactivated>
      </JVButtonContainerDeactivated>
    );
  }

  /**
   *  Render Deactivated Button
   */
  function renderButtonInversed() {
    return (
      <JVButtonContainerInversed onPress={() => props.onPress}>
        <JVButtonTitleInversed>{props.buttonTitle}</JVButtonTitleInversed>
      </JVButtonContainerInversed>
    );
  }

  /**
   *  Render Default Button
   * @returns {JSX.Element}
   */
  function renderButtonDegault() {
    return (
      <JVButtonContainerDefault onPress={() => props.onPress}>
        <JVButtonTitleDefault>{props.buttonTitle}</JVButtonTitleDefault>
      </JVButtonContainerDefault>
    );
  }

  /**
   *
   * @param buttonType
   * @returns {JSX.Element}
   */
  function getButtonStyle(buttonType) {
    let _return;
    switch (buttonType) {
      case 'default':
        _return = renderButtonDegault();
        break;
      case 'inversed':
        _return = renderButtonInversed();
        break;
      case 'deactivated':
        _return = renderButtonDeactivated();
        break;
      case 'activated':
        _return = renderButtonActivated();
        break;
      default:
        _return = renderButtonDegault();
        break;
    }

    return _return;
  }

  return getButtonStyle(props.buttonTheme);
};

export default memo(JVButton);
