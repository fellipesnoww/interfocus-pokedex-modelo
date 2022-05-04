import React from 'react';

import Pokebola from '../assets/pokeball.svg';
import Input from '../components/Input';

import { 
    Container,
    ConteudoTitulo,
    Header,
    Titulo 
} from './styles';

function Home () {
    
    return(
        <Container>
            <Header>
                <ConteudoTitulo>
                    <Pokebola 
                        width={24}
                        height={24}
                    />
                    <Titulo>Pokédex</Titulo>
                </ConteudoTitulo>
            </Header>
            <Input 
                placeholder='Procurar'
            />
        </Container>
    );
}

export default Home;