import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Autenticar = styled.TouchableOpacity`
    padding: 10px 10px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    margin-top: 138px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.primary};
    font-family: ${({theme}) => theme.fonts.BOLD};
`;