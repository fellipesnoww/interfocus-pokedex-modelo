import React, { useEffect, useState } from 'react';
import FavoriteCard from '../../components/FavoriteCard';
import { Container, Header, Titulo } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { useFavorite } from '../../hooks/favorite';
import { useIsFocused } from '@react-navigation/native';

function Favoritos(){
    
    const {favoritos, removerFavorito, getFavoritos} = useFavorite();
    const isFocused = useIsFocused();

    async function consultaDados() {
        await getFavoritos();
    }

    useEffect(() => {        
        consultaDados();
    },[isFocused])

    return(
        <Container>
            <Header>                
                <Titulo>Favoritos</Titulo>
            </Header>            
                <FlatList 
                    data={favoritos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <FavoriteCard pokemon={item.pokemon} funcaoRemover={() => removerFavorito(item.pokemon.id)}/>
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