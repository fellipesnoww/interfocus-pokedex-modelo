import React from "react";
import { PokemonMove } from "../../dtos/PokemonDTO";
import { Acoes, Container, Dados, Medidas, Nome, Valor } from "./styles";

interface AboutDataProps{
    weight: string;
    height: string;
    moves: PokemonMove[]
}

function AboutData({ weight, height, moves }: AboutDataProps){
    return(
        <Container>
            <Dados>
                <Medidas>
                    <Valor>{weight}</Valor>
                </Medidas>
                <Nome>Weight</Nome>
            </Dados>
            <Dados>
                <Medidas>
                    <Valor>{height}</Valor>
                </Medidas>
                <Nome>Height</Nome>
            </Dados>
            <Dados naoExibirBorda>
                <Acoes>
                    {moves.map(m => (
                        <Valor key={m.id}>{m.name}</Valor>
                    ))}
                </Acoes>
                <Nome>Moves</Nome>
            </Dados>
        </Container>
    )
}


export default AboutData;