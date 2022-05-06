import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';

import Pokebola from '../../assets/pokeball.svg';
import SortDesc from '../../assets/sortdesc.svg';
import SortAsc from '../../assets/sortasc.svg';

import Input from '../../components/Input';
import SmallCard from '../../components/SmallCard';
import { PokemonDTO } from '../../dtos/PokemonDTO';
import api from '../../services/api';

import { 
    BotaoHeader,
    Container,
    ConteudoTitulo,
    Header,
    Titulo 
} from './styles';

function Home () {
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState<PokemonDTO[]>([]);
    const [decrescente, setDecrescente] = useState(false);

    const [loading, setLoading] = useState(true);

    const tema = useTheme();

    function alteraNomeFiltro(nome: string){
        setNomeFiltro(nome);

        const filtrados = pokemons.filter(p => p.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltrados(filtrados);
    }

    function alteraTipoFiltro(){        
        setDecrescente(oldState => !oldState);
    }

    useEffect(() => {
        async function consultaPokemons() {
            try {
                const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc';
                const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);
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
    },[decrescente]);

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
                        <BotaoHeader onPress={alteraTipoFiltro}>
                            {decrescente ? (                                
                                <SortAsc width={20} height={32}/>                                                      
                            ) : 
                            (   
                                <SortDesc width={20} height={32}/>                               
                            )}
                        </BotaoHeader>
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