import { Feather } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';
import FavoriteCard from '../../components/FavoriteCard';
import { Container, ConteudoFavoritos, Header, Titulo } from './styles';

function Favoritos(){
    const tema = useTheme();
    return(
        <Container>
            <Header>
                <Feather name='arrow-left' size={17} color={tema.primary}/>
                <Titulo>Favoritos</Titulo>
            </Header>
            <ConteudoFavoritos>
                <FavoriteCard />
            </ConteudoFavoritos>
        </Container>
    )
}

export default Favoritos;