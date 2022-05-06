import {  MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import retornaSvg from '../../utils/retornaSvg';
import TypeCard from '../TypeCard';

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

function FavoriteCard(){
    const tema = useTheme();

    function removerPokemonFavoritos(){
        Alert.alert('Confirme', 
        `Deseja realmente remover o Bulbasaur do seus favoritos?`,
        [
            {
                text: 'Não 😊',
                style: "cancel",
                onPress: () => {}                
            },
            {
                text: 'Sim 😢',
                onPress: () => {}                
            }
        ])
    }

    return(
        <Container>
            <ConteudoSvg>
                {retornaSvg('Bulbasaur', 95, 97)}
            </ConteudoSvg>
            <ConteudoTexto>
                <Descricao>
                    <LabelBold>Bulbasaur</LabelBold>
                    <LabelBold style={{
                        marginLeft: 30
                    }}>#001</LabelBold>
                </Descricao>
                <Tipos>
                    <TypeCard tipoPokemon={{id: 1, name: 'ghost'}}/>
                </Tipos>
            </ConteudoTexto>
            <Opcao>
                <Botao onPress={removerPokemonFavoritos}>
                    <MaterialCommunityIcons name='heart-broken' size={20} color={tema.primary}/>
                </Botao>
            </Opcao>
        </Container>
    )
}

export default FavoriteCard;