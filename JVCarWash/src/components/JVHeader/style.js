import styled from 'styled-components';

export const JVHeaderContainer = styled.View`
  background: ${(props) => props.theme.COLOR_1};
  height: 40px;
  align-self: stretch;
`;

export const JVHeaderTitle = styled.Text`
  color: ${(props) => props.theme.COLOR_1};
`;

export const JVHeaderIcon = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

export const JVHeaderNotification = styled.TouchableOpacity`
  background: ${(props) => props.theme.COLOR_1};
  border-color: ${(props) => props.theme.COLOR_1};
  border-width: 1px;
  border-radius: 30px;
  width: 20px;
  height: 20px;
`;
