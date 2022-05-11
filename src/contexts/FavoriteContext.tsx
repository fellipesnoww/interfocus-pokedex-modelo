import { createContext } from 'react';
import { FavoritoDTO } from '../dtos/FavoritoDTO';
import { PokemonDTO } from '../dtos/PokemonDTO';

interface IFavoriteContext{  
    adicionarFavorito(pokemon: PokemonDTO): Promise<void>;
    removerFavorito(id: number): Promise<void>; 
    verificaExistencia(id: number): Promise<void>; 
    favoritos: FavoritoDTO[];   
    consultando: boolean;
    favoritado: boolean;
}

export const FavoriteContext = createContext({} as IFavoriteContext);