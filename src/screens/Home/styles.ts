import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 0 16px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ConteudoTitulo = styled.View`
  flex-direction: row;
  align-items: center; 
`;

export const Titulo = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.BOLD};
  color: ${({theme}) => theme.dark_gray};
  margin-left: 16px;
`;