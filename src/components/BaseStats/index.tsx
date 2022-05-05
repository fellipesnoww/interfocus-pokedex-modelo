import React from 'react';
import { PokemonStats } from '../../dtos/PokemonDTO';
import { Atributo, Atributos, Container, MedidorBackground, Medidores, MedidorValor, Valor, Valores } from './styles';

interface BaseStatsProps{
    stats: PokemonStats;
    pokemonType: string;
}

function BaseStats({stats, pokemonType}: BaseStatsProps){
    return (
        <Container>
            <Atributos>
                <Atributo type={pokemonType}>HP</Atributo>
                <Atributo type={pokemonType}>ATK</Atributo>
                <Atributo type={pokemonType}>DEF</Atributo>
                <Atributo type={pokemonType}>STAK</Atributo>
                <Atributo type={pokemonType}>SDEF</Atributo>
                <Atributo type={pokemonType}>SPD</Atributo>               
            </Atributos>
            <Valores>
                <Valor>{stats.hp}</Valor>
                <Valor>{stats.atk}</Valor>
                <Valor>{stats.def}</Valor>
                <Valor>{stats.satk}</Valor>
                <Valor>{stats.sdef}</Valor>
                <Valor>{stats.spd}</Valor>               
            </Valores>
            <Medidores>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.hp}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.atk}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.def}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.satk}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.sdef}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={stats.spd}
                        type={pokemonType}
                    />
                </MedidorBackground>
            </Medidores>
        </Container>
    )
}

export default BaseStats;