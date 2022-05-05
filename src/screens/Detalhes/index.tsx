import React from "react";
import AboutData from "../../components/AboutData";
import BaseStats from "../../components/BaseStats";
import TypeCard from "../../components/TypeCard";
import retornaSvg from "../../utils/retornaSvg";
import { Codigo, Container, Conteudo, ConteudoSvg, ConteudoTitulo, Header, LabelDestaque, Nome, Sobre, Tipos } from "./styles";


function Detalhes(){
    const tipos = [
        {
            id: 1,
            name: "grass"
        },
        {
            id: 2,
            name: "poison"
        }
    ]
    return (
        <Container>
            <Header>
                <ConteudoTitulo>
                    <></>
                    <Nome>Bulbasaur</Nome>
                    <Codigo>#001</Codigo>
                </ConteudoTitulo>
                <></>
            </Header>
            <Conteudo>
                <ConteudoSvg>
                    {retornaSvg('Bulbasaur', 200, 200)}
                </ConteudoSvg>
                <Tipos>
                    {tipos.map(t => (
                        <TypeCard tipoPokemon={t} key={t.id}/>
                    ))}
                </Tipos>
                <LabelDestaque type={tipos[0].name}>About</LabelDestaque>
                <AboutData 
                    moves={[{
                        "id": 1,
                        "name": "Chlorophyll"
                        },
                        {
                            "id": 2,
                            "name": "Overgrow"
                        }
                    ]}
                    weight="6,9 kg"
                    height="0,7 m"
                />
                <Sobre>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</Sobre>
                <LabelDestaque type={tipos[0].name}>Base Stats</LabelDestaque>
                <BaseStats stats={
                    {
                        hp: "045",
                        atk: "049",
                        def: "049",
                        satk: "065",
                        sdef: "065",
                        spd: "045"
                    }
                }
                pokemonType={tipos[0].name}
                />
            </Conteudo>
        </Container>
    )
}

export default Detalhes;