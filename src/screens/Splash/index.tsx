import React from "react";
import LottieView from "lottie-react-native";

import animacao from '../../assets/pokeball-load.json';

import { Container } from "./styles";

function Splash() {
    return (
        <Container>
            <LottieView 
                autoPlay
                loop
                resizeMode="contain"
                source={animacao}
                style={{
                    width: 100,
                    height: 100
                }}
                
            />
        </Container>
    )
}

export default Splash;