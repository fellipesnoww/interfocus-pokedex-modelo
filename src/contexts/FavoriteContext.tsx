import { createContext } from 'react';
import { FavoritoDTO } from '../dtos/FavoritoDTO';
import { PokemonDTO } from '../dtos/PokemonDTO';

interface IFavoriteContext{  
    adicionarFavorito(pokemon: PokemonDTO): Promise<void>;
    removerFavorito(id: number): Promise<void>; 
    verificaExistencia(id: number): Promise<boolean>; 
    favoritos: FavoritoDTO[];   
    consultando: boolean;
}

export const FavoriteContext = createContext({} as IFavoriteContext);