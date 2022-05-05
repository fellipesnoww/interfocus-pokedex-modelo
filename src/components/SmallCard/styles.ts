import styled from 'styled-components/native';

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme, type}) => theme[type]};
  background-color: ${({theme}) => theme.white};
  width: 104px;
  height: 112px;
  margin: 8px 8px 8px 0px;
`;

export const ConteudoCodigo = styled.View`
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    margin-top: 4px;
    margin-right: 8px;
`;

export const Codigo = styled.Text<Props>`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme, type}) => theme[type]};

    font-size: 8px;
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
    font-size: 8px;
`;
