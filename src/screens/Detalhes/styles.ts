import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 44px 4px 0px 4px;  
  background-color: ${({theme, type}) => theme[type]};
`;

export const Header = styled.View`
    width: 100%;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 140px;  
  
`;

export const ConteudoTitulo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BotaoHeader = styled.TouchableOpacity`
    align-items: flex-end;
    justify-content: center;
    width: 40px;
    height: 40px;
`

export const Nome = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: ${RFValue(24)}px;
    margin-left: 19px;
    margin-right: 16px;    
`;

export const Codigo = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: ${RFValue(12)}px;
`;


export const Conteudo = styled.View`
    flex: 1;
    border-radius: 8px;
    background-color: ${({theme}) => theme.background};
    padding: 0 20px;
    align-items: center;
`;

export const ConteudoSvg = styled.View`
    margin-top: -130px;
    position: absolute;
`;

export const Tipos = styled.View`
    margin-top: 70px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

export const LabelDestaque = styled.Text<Props>`
    font-family: ${({theme}) => theme.fonts.BOLD};    
    color: ${({theme, type}) => theme[type]};
    font-size: ${RFValue(14)}px;

`;

export const Sobre = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};    
    color: ${({theme}) => theme.dark_gray};
    font-size: ${RFValue(10)}px;
    line-height: 16px;
    text-align: justify;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;
