import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface InputProps {  
  focado: boolean;
  preenchido: boolean;

}

/* ${({ focado, theme }) => focado ? css`
`
:
css`
 
`
};

${({ preenchido, theme }) => preenchido && css`
border-width: 2px;
border-color: ${theme.sucesso};   
`} */

export const Container = styled.View<InputProps>`
  flex-direction: row;
  margin: 12px 0 16px 0;  
  border-radius: 8px;
  border-width: 2px;
  border-color:  ${({ theme }) => theme.LIGTH_GRAY};
  padding: 4px 0;
  background-color: ${({ theme }) => theme.WHITE};  
  width: 100%;
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.WHITE};
  color: ${({ theme }) => theme.LIGTH_GRAY};      
  border-radius: 8px;
`;
