interface PokemonAbout {
    weight: string;
    height: string;
    description: string;

}

export interface PokemonMove{
    id: number;
    name: string;
}

export interface PokemonStats {
    hp: string;
    atk: string;
    def: string;
    satk: string;
    sdef: string;
    spd: string;
}

export interface PokemonType {
    id: number;
    name: string;
}

export interface PokemonDTO {
    id: number;
    code: string;
    name: string;
    about: PokemonAbout;
    moves: PokemonMove[];
    base_stats: PokemonStats;
    types: PokemonType[]   
}


// export enum PokemonTypeEnum {
//     rock = 'ROCK',
//     ghost = 'GHOST',
//     steel = 'STEEL',
//     water = 'WATER',
//     grass = 'GRASS',
//     psychic = 'PSYCHIC',
//     ice ='ICE',
//     dark = 'DARK',
//     fairy = 'FAIRY',
//     normal = 'NORMAL',
//     fighthing = 'FIGHTHING',
//     flying = 'FLYING',
//     poison = 'POISON',
//     ground = 'GROUND',
//     bug = 'BUG',
//     fire = 'FIRE',
//     electric = 'ELECTRIC',
//     dragon = 'DRAGON',
// }
