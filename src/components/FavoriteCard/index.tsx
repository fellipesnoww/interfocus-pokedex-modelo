import {  MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { PokemonDTO } from '../../dtos/PokemonDTO';
import retornaSvg from '../../utils/retornaSvg';
import TypeCard from '../TypeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { 
     Container,
     ConteudoSvg,
     ConteudoTexto,     
     Descricao,
     LabelBold,
     Tipos,
     Opcao,
     Botao,
} from './styles';
import { FavoritoDTO } from '../../dtos/FavoritoDTO';

const FAVORITOS_KEY = '@pokedex:favoritos';

interface FavoritoProps{
    pokemon: PokemonDTO;
    funcaoRemover: (id: number) => Promise<void>;
}

function FavoriteCard({pokemon, funcaoRemover, ...rest}: FavoritoProps){
    const tema = useTheme();

    

    function removerPokemonFavoritos(pokemon: PokemonDTO){
        Alert.alert('Confirme', 
        `Deseja realmente remover o ${pokemon.name} do seus favoritos?`,
        [
            {
                text: 'Não 😊',
                style: "cancel",
                onPress: () => {}                
            },
            {
                text: 'Sim 😢',
                onPress: () => funcaoRemover(pokemon.id)                
            }
        ])
    }

    return(
        <Container type={pokemon.types[0].name}>
            <ConteudoSvg>
                {retornaSvg(pokemon.name, 95, 97)}
            </ConteudoSvg>
            <ConteudoTexto>
                <Descricao>
                    <LabelBold type={pokemon.types[0].name}>{pokemon.name}</LabelBold>
                    <LabelBold type={pokemon.types[0].name}
                        style={{
                            marginLeft: 30
                        }}
                    >#001</LabelBold>
                </Descricao>
                <Tipos>
                    {pokemon.types.map(t => (
                        <TypeCard tipoPokemon={t} key={t.id}/>
                    ))}
                </Tipos>
            </ConteudoTexto>
            <Opcao>
                <Botao onPress={() => removerPokemonFavoritos(pokemon)}>
                    <MaterialCommunityIcons name='heart-broken' size={20} color={tema.primary}/>
                </Botao>
            </Opcao>
        </Container>
    )
}

export default FavoriteCard;