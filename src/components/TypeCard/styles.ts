import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
interface Props {
    type: string;
}

export const Container = styled.View<Props>`
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, type}) => theme[type]};
  border-radius: 10px;
  margin-right: 16px;
`;

export const Tipo = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: ${RFValue(10)}px;
`;