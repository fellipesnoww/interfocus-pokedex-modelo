import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import FavoriteCard from '../../components/FavoriteCard';
import { FavoritoDTO } from '../../dtos/FavoritoDTO';
import { Container, ConteudoFavoritos, Header, Titulo } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const FAVORITOS_KEY = '@pokedex:favoritos';


function Favoritos(){
    const [favoritos, setFavoritos] = useState<FavoritoDTO[]>([])
    const tema = useTheme();
    const isFocused = useIsFocused();
    async function getFavoritos(){
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[]; 
            setFavoritos(favoritosParse);           
        }        
    }

    async function removeStorage(id: number){
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados));
            getFavoritos();
        }
    }

    useEffect(() => {
        getFavoritos();
    }, [isFocused]);
    
    return(
        <Container>
            <Header>                
                <Titulo>Favoritos</Titulo>
            </Header>
            
                <FlatList 
                    data={favoritos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <FavoriteCard pokemon={item.pokemon} funcaoRemover={() => removeStorage(item.pokemon.id)}/>
                    )}
                    style={{
                        flex: 1,
                        width: '100%',                        
                        paddingTop: 33,
                        paddingRight: 0,
                        paddingBottom: 0,
                        paddingLeft: 24                        
                    }}

                />                
            
        </Container>
    )
}

export default Favoritos;