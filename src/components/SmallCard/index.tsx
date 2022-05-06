import React from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";
import retornaSvg from "../../utils/retornaSvg";
import { useNavigation } from "@react-navigation/native";

interface SmallCardProps{
    pokemon: PokemonDTO;
}

function SmallCard({pokemon, ...rest}:SmallCardProps){    
    const navigation = useNavigation();

    function navegarParaDetalhes(pokemon: PokemonDTO){
        navigation.navigate('Detalhes' as never, {pokemon} as never)
    }

    return (
        <Container {...rest} type={pokemon.types[0].name} onPress={() => navegarParaDetalhes(pokemon)}>
            <ConteudoCodigo>
                <Codigo type={pokemon.types[0].name}>{pokemon.code}</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                {retornaSvg(pokemon.name)}
            </ConteudoSvg>
            <ConteudoNome type={pokemon.types[0].name}>
                <Nome>{pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;