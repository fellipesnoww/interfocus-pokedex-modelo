import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
interface Props {
    type: string;
}

export const Container = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme, type}) => theme[type]};
  background-color: ${({theme}) => theme.white};
  
  
  margin: 8px 8px 8px 0px;
`;

export const ConteudoCodigo = styled.View`
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    padding: 8px;
`;

export const Codigo = styled.Text<Props>`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme, type}) => theme[type]};
    font-size: ${RFValue(10)}px;
`;


export const ConteudoSvg = styled.View`   
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
`;

export const ConteudoNome = styled.View<Props>`
    width: 100%;
    align-items: center;
    justify-content: center;    
    background-color: ${({theme, type}) => theme[type]};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 6px 8px;
`;

export const Nome = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.white};
    font-size: ${RFValue(10)}px;
`;
