import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AboutData from "../../components/AboutData";
import BaseStats from "../../components/BaseStats";
import TypeCard from "../../components/TypeCard";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Header, LabelDestaque, Nome, Sobre, Tipos } from "./styles";

interface ParametrosTela{
    pokemon: PokemonDTO;
}

function Detalhes(){   
    const [pokemon, setPokemon] = useState<PokemonDTO>();

    const route = useRoute();

    useEffect(() => {
        const parametros = route.params as ParametrosTela;        
        setPokemon(parametros.pokemon);
    },[]);

    if(!pokemon) return <ActivityIndicator size="small" color="red" />

    return (
        <Container type={pokemon.types[0].name}>
            <Header>
                <ConteudoTitulo>
                    <></>
                    <Nome>{pokemon.name}</Nome>
                    <Codigo>{pokemon.code}</Codigo>
                </ConteudoTitulo>
                <></>
            </Header>
            <Conteudo>
                <ConteudoSvg>
                    {retornaSvg(pokemon.name, 200, 200)}
                </ConteudoSvg>
                <Tipos>
                    {pokemon?.types.map(t => (
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