import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';

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
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState<PokemonDTO[]>([]);

    const [loading, setLoading] = useState(true);

    function alteraNomeFiltro(nome: string){
        setNomeFiltro(nome);

        const filtrados = pokemons.filter(p => p.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltrados(filtrados);
    }

    useEffect(() => {
        async function consultaPokemons() {
            try {
                const resposta = await api.get<PokemonDTO[]>('/pokemons');
                if(resposta.data.length > 0){                    
                    setPokemons(resposta.data);   
                    setPokemonsFiltrados(resposta.data)                 
                }
            } catch (error) {
                console.log('erro ao consultar pokemons')
            }
            setLoading(false);            
        }

        consultaPokemons();
    },[]);

    return(        
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>            
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
                        value={nomeFiltro}
                        onChangeText={alteraNomeFiltro}
                    />

                    <FlatList
                        data={pokemonsFiltrados}
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
        </TouchableWithoutFeedback>
    );
}

export default Home;