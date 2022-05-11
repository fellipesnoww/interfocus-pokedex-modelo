import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';

import { FavoritoDTO } from '../dtos/FavoritoDTO';
import { PokemonDTO } from '../dtos/PokemonDTO';
import { UsuarioDTO } from '../dtos/UsuarioDTO';
import { useAuth } from './auth';

interface FavoriteProviderProps{
    children: ReactNode
}

const FAVORITOS_KEY = '@pokedex:favoritos';

function FavoriteProvider({children}: FavoriteProviderProps){
    const [favoritos, setFavoritos] = useState<FavoritoDTO[]>([]);
    const [consultando, setConsultando] = useState(true);
    
    const {usuario} = useAuth();

    async function getFavoritos(){
        const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritosStorage){
            const favoritosParse = JSON.parse(favoritosStorage) as FavoritoDTO[]; 
            setFavoritos(favoritosParse);           
        }
        setConsultando(false);        
    }

    async function removerFavorito(id: number){
        const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritosStorage){
            const favoritosParse = JSON.parse(favoritosStorage) as FavoritoDTO[];
            const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados)); 
            getFavoritos();
        }
    }


    async function verificaExistencia(id: number): Promise<boolean> {        
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            if(favoritosParse.some(f => f.pokemon.id === id)){
                return true;
            }
            return false;
        }
        return false;
    }

    async function adicionarFavorito(pokemon: PokemonDTO) {       
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            if(favoritosParse.some(f => f.pokemon.id === pokemon.id)){
                await removerFavorito(pokemon.id);                
            } else {                
                favoritosParse.push({
                    id: Math.random(),
                    pokemon,
                    usuario: usuario as UsuarioDTO
                });
    
                await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritosParse));                     
            }
        } else {
            const novoFavorito = [{
                id: Math.random(),
                pokemon,
                usuario: usuario as UsuarioDTO
            }]
            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novoFavorito));
        }        
    }

    useEffect(() => {
        getFavoritos();
    },[]);


    return (
        <FavoriteContext.Provider value={{
            adicionarFavorito,
            removerFavorito,
            consultando,
            favoritos,
            verificaExistencia
        }}>
            { children }
        </FavoriteContext.Provider>
    )
}

function useFavorite()
{
    const context = useContext(FavoriteContext);

    return context;
}

export { FavoriteProvider, useFavorite }