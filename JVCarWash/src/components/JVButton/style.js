import styled from 'styled-components';

// Default
export const JVButtonContainerDefault = styled.TouchableOpacity`
  background: ${(props) => props.theme.COLOR_1};
  border-color: ${(props) => props.theme.COLOR_1};
  border-width: 1px;
  height: 40px;
  align-self: stretch;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const JVButtonTitleDefault = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_1};
  font-size: 15px;
`;

// Inversed
export const JVButtonContainerInversed = styled.TouchableOpacity`
  background: ${(props) => props.theme.TRANSPAREDNT_COLOR};
  border-color: ${(props) => props.theme.COLOR_1};
  border-width: 2px;
  height: 40px;
  align-self: stretch;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const JVButtonTitleInversed = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_2};
  font-size: 15px;
`;

// Deactivated
export const JVButtonContainerDeactivated = styled.TouchableOpacity`
  background: ${(props) => props.theme.TRANSPAREDNT_COLOR};
  border-color: ${(props) => props.theme.COLOR_4};
  border-width: 1px;
  height: 40px;
  align-self: stretch;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const JVButtonTitleDeactivated = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_4};
  font-size: 15px;
`;

// Activated
export const JVButtonContainerActivated = styled.TouchableOpacity`
  background: ${(props) => props.theme.COLOR_3};
  border-color: ${(props) => props.theme.COLOR_1};
  border-width: 1px;
  height: 40px;
  align-self: stretch;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const JVButtonTitleActivated = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_3};
  font-size: 15px;
`;
