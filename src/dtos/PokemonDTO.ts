interface PokemonAbout {
    weight: string;
    height: string;
    description: string;

}

interface PokemonMove{
    id: number;
    name: string;
}

interface PokemonStats {
    hp: string;
    atk: string;
    def: string;
    sat: string;
    sde: string;
    spd: string;
}

interface PokemonType {
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
