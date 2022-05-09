import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import AboutData from "../../components/AboutData";
import BaseStats from "../../components/BaseStats";
import TypeCard from "../../components/TypeCard";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { BotaoHeader, Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Header, LabelDestaque, Nome, Sobre, Tipos } from "./styles";
import { useTheme } from "styled-components";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { useAuth } from "../../hooks/auth";
import { UsuarioDTO } from "../../dtos/UsuarioDTO";

const FAVORITOS_KEY = '@pokedex:favoritos';
interface ParametrosTela{
    pokemon: PokemonDTO;
}

function Detalhes(){   
    const [pokemon, setPokemon] = useState<PokemonDTO>();
    const [favoritado, setFavoritado] = useState(false);

    const isFocused = useIsFocused();

    const route = useRoute();
    const navigation = useNavigation();
    const { usuario } = useAuth();

    function voltar(){
        navigation.goBack();
    }


    async function removeStorage(id: number){
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
            await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados));            
        }
    }


    async function verificaFavorito(id: number) {
        // await AsyncStorage.clear();
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            if(favoritosParse.some(f => f.pokemon.id === id)){
                setFavoritado(true);
            } else {
                setFavoritado(false);
            }
        }
    }

    async function addFavoritos(pokemon: PokemonDTO) {
        const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);
        if(favoritos){
            const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
            if(favoritosParse.some(f => f.pokemon.id === pokemon.id)){
                await removeStorage(pokemon.id);
                setFavoritado(oldState => !oldState);
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
        setFavoritado(true);
    }

    useEffect(() => {
        const parametros = route.params as ParametrosTela;               
        setPokemon(parametros.pokemon);
        verificaFavorito(parametros.pokemon.id);
        
    },[isFocused]);

    const tema = useTheme();
    
    if(!pokemon) return <ActivityIndicator size="small" color="red" />


    return (
        <Container type={pokemon.types[0].name}>
            <Header>
                <ConteudoTitulo>
                    <BotaoHeader
                        onPress={voltar}
                    >
                        <Feather
                            name="arrow-left"
                            size={18}
                            color={tema.background}
                        />
                    </BotaoHeader>
                    <Nome>{pokemon.name}</Nome>
                    <Codigo>{pokemon.code}</Codigo>
                </ConteudoTitulo>
                <BotaoHeader onPress={() => addFavoritos(pokemon)}>
                    {favoritado ? (
                        <MaterialCommunityIcons
                            name="heart"
                            size={22}
                            color={tema.background}                        
                    />
                    ) : (                        
                        <Feather
                            name="heart"
                            size={22}
                            color={tema.background}                        
                        />
                    )}
                </BotaoHeader>
            </Header>
            <Conteudo>
                <ConteudoSvg>
                    {retornaSvg(pokemon.name, 200, 200)}
                </ConteudoSvg>
                <Tipos>
                    {pokemon.types.map(t => (
                        <TypeCard tipoPokemon={t} key={t.id}/>
                    ))}
                </Tipos>
                <LabelDestaque type={pokemon.types[0].name}>About</LabelDestaque>
                <AboutData 
                    moves={pokemon.moves}
                    weight={pokemon.about.weight}
                    height={pokemon.about.height}
                />
                <Sobre>{pokemon.about.description}.</Sobre>
                <LabelDestaque type={pokemon.types[0].name}>Base Stats</LabelDestaque>
                <BaseStats stats={pokemon.base_stats}
                pokemonType={pokemon.types[0].name}
                />
            </Conteudo>
        </Container>
    )
}

export default Detalhes;