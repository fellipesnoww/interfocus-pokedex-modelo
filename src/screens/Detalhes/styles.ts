import styled from 'styled-components/native';

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 30px 4px 4px 4px;  
  background-color: ${({theme, type}) => theme[type]};
`;

export const Header = styled.View`
    width: 100%;
    padding: 0 24px;
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
`

export const Nome = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: 24px;
    margin-left: 19px;
    margin-right: 16px;    
`;

export const Codigo = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: 12px;
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
    font-size: 14px;
`;

export const Sobre = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};    
    color: ${({theme}) => theme.dark_gray};
    font-size: 10px;
    line-height: 16px;
    text-align: justify;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;
