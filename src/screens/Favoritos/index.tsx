import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import FavoriteCard from '../../components/FavoriteCard';
import { FavoritoDTO } from '../../dtos/FavoritoDTO';
import { Container, ConteudoFavoritos, Header, Titulo } from './styles';

const FAVORITOS_KEY = '@pokedex:favoritos';


function Favoritos(){
    const [favoritos, setFavoritos] = useState<FavoritoDTO[]>([])
    const tema = useTheme();


    async function getFavoritos(){
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);
        console.log(favoritos);
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[]; 
            setFavoritos(favoritosParse);           
        }        
    }

    useEffect(() => {
        getFavoritos();
    }, []);
    
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