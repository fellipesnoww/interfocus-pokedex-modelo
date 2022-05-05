import React from "react";
import { PokemonType } from "../../dtos/PokemonDTO";
import { Container, Tipo } from "./styles";

interface TypeCardProps{
    tipoPokemon: PokemonType
}

function TypeCard({tipoPokemon, ...rest}: TypeCardProps){
    return (
        <Container {...rest} type={tipoPokemon.name}>
            <Tipo>
                {tipoPokemon.name}
            </Tipo>
        </Container>
    )
}

export default TypeCard;