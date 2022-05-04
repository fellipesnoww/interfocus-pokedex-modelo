import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, InputText } from './styles';

interface InputProps extends TextInputProps{
  //iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const Input: React.FC<InputProps> = ({value, ...rest}) => {
  const [preenchido, setPreenchido] = useState(false);
  const [focado, setFocado] = useState(false); 
 

  function alteraFocusInput() {
    setFocado(true);
  }

  function alteraBlur() {
    setFocado(false);
    setPreenchido(!!value)     
  }

  const tema = useTheme();
  return (
      <Container focado={focado} preenchido={preenchido}>
        <InputText 
           onFocus={alteraFocusInput}
           onBlur={alteraBlur}
           {...rest}
        />        
      </Container>
  );
}

export default Input;