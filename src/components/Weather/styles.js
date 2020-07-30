import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.bgcolor};
`;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 25px;
  margin-bottom: 40px;
`;

export const WhiteText = styled.Text`
  font-size: ${props => props.fontsize};
  color: #fff;
`;
