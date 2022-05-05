import React from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";

import Charmander from '../../assets/pokemons/Charmander.svg'
import { Codigo, Container, ConteudoCodigo, ConteudoNome, Nome } from "./styles";

interface SmallCardProps{
    pokemon: PokemonDTO;
}


function SmallCard({pokemon, ...rest}:SmallCardProps){
    
    return (
        <Container {...rest} type={pokemon.types[0].name}>
            <ConteudoCodigo>
                <Codigo type={pokemon.types[0].name}>{pokemon.code}</Codigo>
            </ConteudoCodigo>
            <Charmander 
                width={72}
                height={72}
            />
            <ConteudoNome type={pokemon.types[0].name}>
                <Nome>{pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;