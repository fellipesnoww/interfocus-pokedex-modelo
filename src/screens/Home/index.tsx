import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Pokebola from '../../assets/pokeball.svg';
import Input from '../../components/Input';
import SmallCard from '../../components/SmallCard';
import { PokemonDTO } from '../../dtos/PokemonDTO';
import api from '../../services/api';

import { 
    Container,
    ConteudoTitulo,
    Header,
    Titulo 
} from './styles';

function Home () {
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

    useEffect(() => {
        async function consultaPokemons() {
            try {
                const resposta = await api.get<PokemonDTO[]>('/pokemons');

                if(resposta.data.length > 0){
                    console.log(resposta.data);
                    setPokemons(resposta.data);
                }
            } catch (error) {
                console.log('erro ao consultar pokemons')
            }            
        }

        consultaPokemons();
    },[]);

    return(
        <Container>
            <Header>
                <ConteudoTitulo>
                    <Pokebola 
                        width={24}
                        height={24}
                    />
                    <Titulo>Pokédex</Titulo>
                </ConteudoTitulo>
            </Header>
            <Input 
                placeholder='Procurar'
            />

            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.code}
                numColumns={3}
                renderItem={({item}) => (
                    <SmallCard 
                        pokemon={item}
                    />
                )}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                style={{
                    width: '100%'                   
                }}
                
            />
        </Container>
    );
}

export default Home;