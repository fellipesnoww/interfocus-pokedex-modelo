import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    align-items: center;
    box-shadow: 0px 4px 4px;
    shadow-color: ${({theme}) => theme.grass};
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 4;
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

export const LabelBold = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.grass};
`;

export const Tipos = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
`;


export const Opcao = styled.View`    
    align-items: flex-end;
    justify-content: center;
    margin-left: 39px;
`;

export const Botao = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;