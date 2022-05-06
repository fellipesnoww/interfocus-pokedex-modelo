import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 0 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 24px;
`;

export const Titulo = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.primary};
    margin-left: 28px;
`;

export const ConteudoFavoritos = styled.View`
  width: 100%;
 
`;