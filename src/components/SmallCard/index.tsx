import React from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, Nome } from "./styles";
import retornaSvg from "../../utils/retornaSvg";

interface SmallCardProps{
    pokemon: PokemonDTO;
}


function SmallCard({pokemon, ...rest}:SmallCardProps){
    
    return (
        <Container {...rest} type={pokemon.types[0].name}>
            <ConteudoCodigo>
                <Codigo type={pokemon.types[0].name}>{pokemon.code}</Codigo>
            </ConteudoCodigo>
           {retornaSvg(pokemon.name)}
            <ConteudoNome type={pokemon.types[0].name}>
                <Nome>{pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;