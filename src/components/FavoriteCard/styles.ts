import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props{
    type: string;
}

export const Container = styled.View<Props>`
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    align-items: center;
    box-shadow: 0px 4px 4px;
    shadow-color: ${({theme, type}) => theme[type]};
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;
    margin-bottom: 41px;
    justify-content: space-between;
`;

export const ConteudoSvg = styled.View`
    margin-left: -24px;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const ConteudoTexto = styled.View`
    align-items: flex-start;
    justify-content: center;
    margin-left: 87px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const Descricao = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LabelBold = styled.Text<Props>`    
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme, type}) => theme[type]};
`;

export const Tipos = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
`;

export const Opcao = styled.View`    
    align-items: center;
    justify-content: center;    
`;

export const Botao = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: flex-start;
    justify-content: flex-start;
`;