import { useMemo } from 'react';

export const GAME_MODES = [
  {
    label: 'Choose your Team',
    link: '/pokemon-list',
  },
  {
    label: 'Battle',
    link: '/battle',
  },
  {
    label: 'Wordle',
    link: '/wordle',
  },
];

export function MEMO_STATS(pokemon) {
  return useMemo(() => {
    return {
      hp: {
        label: 'Health Points :',
        value: pokemon.stats.hpStat,
        styles: {
          backgroundColor: '#5ABA4A',
          width: `${(((pokemon.battleStats.hpStat <= MAX_STATS.HP_STAT
            ? pokemon.battleStats.hpStat
            : MAX_STATS.HP_STAT) / MAX_STATS.HP_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: '0.625rem',
        },
      },
      atk: {
        label: 'Attack :',
        value: pokemon.stats.atkStat,
        styles: {
          backgroundColor: '#F37336',
          width: `${(((pokemon.battleStats.atkStat <= MAX_STATS.ATK_STAT
            ? pokemon.battleStats.atkStat
            : MAX_STATS.ATK_STAT) / MAX_STATS.ATK_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: '0.625rem',
        },
      },
      def: {
        label: 'Defence :',
        value: pokemon.stats.defStat,
        styles: {
          backgroundColor: '#63C8F2',
          width: `${(((pokemon.battleStats.defStat <= MAX_STATS.DEF_STAT
            ? pokemon.battleStats.defStat
            : MAX_STATS.DEF_STAT) / MAX_STATS.DEF_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: ' 0.625rem',
        },
      },
      spAtk: {
        label: 'Sp. Attack :',
        value: pokemon.stats.spAtkStat,
        styles: {
          backgroundColor: '#D88DBC',
          width: `${(((pokemon.battleStats.spAtkStat <= MAX_STATS.SPATK_STAT
            ? pokemon.battleStats.spAtkStat
            : MAX_STATS.SPATK_STAT) / MAX_STATS.SPATK_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: '0.625rem',
        },
      },
      spDef: {
        label: 'Sp. Defence :',
        value: pokemon.stats.spDefStat,
        styles: {
          backgroundColor: '#1E3E72',
          width: `${(((pokemon.battleStats.spDefStat <= MAX_STATS.SPDEF_STAT
            ? pokemon.battleStats.spDefStat
            : MAX_STATS.SPDEF_STAT) / MAX_STATS.SPDEF_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: '0.625rem',
        },
      },
      speed: {
        label: 'Speed :',
        value: pokemon.stats.speedStat,
        styles: {
          backgroundColor: '#F7CC3B',
          width: `${(((pokemon.battleStats.speedStat <= MAX_STATS.SPEED_STAT
            ? pokemon.battleStats.speedStat
            : MAX_STATS.SPEED_STAT) / MAX_STATS.SPEED_STAT) * 100).toFixed(3)}%`,
          height: '0.375rem',
          borderRadius: '0.625rem',
        },
      },
    };
  }, [pokemon]);
}

export const PHASES = {
  PLAYER1_MOVE_CHOICE: {
    message: 'Player one is choosing their move',
    player1: true,
    player2: false,
    switch1: false,
    switch2: false,
  },
  PLAYER2_MOVE_CHOICE: {
    message: 'Player two is choosing their move',
    player1: false,
    player2: true,
    switch1: false,
    switch2: false,
  },
  BATTLE_PHASE: {
    message: 'Battle Phase',
    player1: false,
    player2: false,
    switch1: false,
    switch2: false,
  },
  SWITCH_POKEMON1: {
    message: 'Player one is switching their pokemon',
    player1: false,
    player2: false,
    switch1: true,
    switch2: false,
  },
  SWITCH_POKEMON2: {
    message: 'Player two is switching their pokemon',
    player1: false,
    player2: false,
    switch1: false,
    switch2: true,
  },
  pokemonIsDown: {
    message: "Pokemon is downed, it can't keep fighting",
    player1: false,
    player2: false,
    switch1: false,
    switch2: false,
  },
};

export const REGIONS_POKEMON = {
  kanto: {
    name: 'Kanto',
    number: 151,
    offset: 0,
  },
  johto: {
    name: 'Johto',
    number: 100,
    offset: 151,
  },
  hoenn: {
    name: 'Hoenn',
    number: 135,
    offset: 251,
  },
  sinnoh: {
    name: 'Sinnoh',
    number: 107,
    offset: 386,
  },
  unova: {
    name: 'Unova',
    number: 165,
    offset: 493,
  },
};

export const MAX_POKEMON_TEAM = 5;
export const MAX_WORDLE_TRIES = 6;

export const DUMMY_TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged.`;

export const TYPE_TO_IMG = {
  normal: 'normal.png',
  fire: 'fire.png',
  water: 'water.png',
  grass: 'grass.png',
  ground: 'ground.png',
  rock: 'rock.png',
  steel: 'steel.png',
  ice: 'ice.png',
  electric: 'electric.png',
  dragon: 'dragon.png',
  ghost: 'ghost.png',
  psychic: 'psychic.png',
  fighting: 'fighting.png',
  poison: 'poison.png',
  bug: 'bug.png',
  flying: 'flying.png',
  dark: 'dark.png',
  fairy: 'fairy.png',
};

export const MOVE_DIVISION = {
  normal: ['normal', 'fighting', 'bug', 'poison', 'flying', 'ground', 'rock', 'ghost'],
  special: ['water', 'fire', 'grass', 'electric', 'ice', 'psychic', 'dragon'],
};

export const MAX_STATS = {
  HP_STAT: 500,
  ATK_STAT: 350,
  DEF_STAT: 400,
  SPATK_STAT: 480,
  SPDEF_STAT: 480,
  SPEED_STAT: 420,
};

export const TYPE_WEAKNESS_TABLE = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 0.5,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 0,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 1,
    fairy: 1,
  },
  fighting: {
    normal: 2,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 2,
    steel: 2,
    ice: 2,
    electric: 1,
    dragon: 1,
    ghost: 0,
    psychic: 0.5,
    fighting: 1,
    poison: 0.5,
    bug: 0.5,
    flying: 0.5,
    dark: 2,
    fairy: 0.5,
  },
  flying: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 2,
    ground: 1,
    rock: 0.5,
    steel: 0.5,
    ice: 1,
    electric: 0.5,
    dragon: 1,
    ghost: 1,
    psychic: 1,
    fighting: 2,
    poison: 1,
    bug: 2,
    flying: 1,
    dark: 1,
    fairy: 1,
  },
  poison: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 2,
    ground: 0.5,
    rock: 0.5,
    steel: 0,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 0.5,
    psychic: 1,
    fighting: 1,
    poison: 0.5,
    bug: 1,
    flying: 1,
    dark: 1,
    fairy: 2,
  },
  ground: {
    normal: 1,
    fire: 2,
    water: 1,
    grass: 0.5,
    ground: 1,
    rock: 2,
    steel: 2,
    ice: 1,
    electric: 2,
    dragon: 1,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 2,
    bug: 0.5,
    flying: 0,
    dark: 1,
    fairy: 1,
  },
  rock: {
    normal: 1,
    fire: 2,
    water: 1,
    grass: 1,
    ground: 0.5,
    rock: 1,
    steel: 0.5,
    ice: 2,
    electric: 1,
    dragon: 1,
    ghost: 1,
    psychic: 1,
    fighting: 0.5,
    poison: 1,
    bug: 2,
    flying: 2,
    dark: 1,
    fairy: 1,
  },
  bug: {
    normal: 1,
    fire: 0.5,
    water: 1,
    grass: 2,
    ground: 1,
    rock: 1,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 0.5,
    psychic: 2,
    fighting: 0.5,
    poison: 0.5,
    bug: 1,
    flying: 0.5,
    dark: 2,
    fairy: 0.5,
  },
  ghost: {
    normal: 0,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 1,
    steel: 1,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 2,
    psychic: 2,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 0.5,
    fairy: 1,
  },
  steel: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    grass: 1,
    ground: 1,
    rock: 2,
    steel: 0.5,
    ice: 2,
    electric: 0.5,
    dragon: 1,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 1,
    fairy: 2,
  },
  fire: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    grass: 2,
    ground: 1,
    rock: 0.5,
    steel: 2,
    ice: 2,
    electric: 1,
    dragon: 0.5,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 2,
    flying: 1,
    dark: 1,
    fairy: 1,
  },
  water: {
    normal: 1,
    fire: 2,
    water: 0.5,
    grass: 0.5,
    ground: 2,
    rock: 2,
    steel: 1,
    ice: 1,
    electric: 1,
    dragon: 0.5,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 1,
    fairy: 1,
  },
  grass: {
    normal: 1,
    fire: 0.5,
    water: 2,
    grass: 0.5,
    ground: 2,
    rock: 2,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 0.5,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 0.5,
    bug: 0.5,
    flying: 0.5,
    dark: 1,
    fairy: 1,
  },
  electric: {
    normal: 1,
    fire: 1,
    water: 2,
    grass: 0.5,
    ground: 0,
    rock: 1,
    steel: 1,
    ice: 1,
    electric: 0.5,
    dragon: 0.5,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 2,
    dark: 1,
    fairy: 1,
  },
  psychic: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 1,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 1,
    psychic: 0.5,
    fighting: 2,
    poison: 2,
    bug: 1,
    flying: 1,
    dark: 0,
    fairy: 1,
  },
  ice: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    grass: 2,
    ground: 2,
    rock: 1,
    steel: 0.5,
    ice: 0.5,
    electric: 1,
    dragon: 2,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 2,
    dark: 1,
    fairy: 1,
  },
  dragon: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 1,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 2,
    ghost: 1,
    psychic: 1,
    fighting: 1,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 1,
    fairy: 0,
  },
  dark: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 1,
    steel: 1,
    ice: 1,
    electric: 1,
    dragon: 1,
    ghost: 2,
    psychic: 2,
    fighting: 0.5,
    poison: 1,
    bug: 1,
    flying: 1,
    dark: 0.5,
    fairy: 0.5,
  },
  fairy: {
    normal: 1,
    fire: 0.5,
    water: 1,
    grass: 1,
    ground: 1,
    rock: 1,
    steel: 0.5,
    ice: 1,
    electric: 1,
    dragon: 2,
    ghost: 1,
    psychic: 1,
    fighting: 2,
    poison: 0.5,
    bug: 1,
    flying: 1,
    dark: 2,
    fairy: 1,
  },
};

export const KEYBOARD_BUTTONS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '-'];

export default {
  TYPE_TO_IMG,
  MAX_STATS,
  TYPE_WEAKNESS_TABLE,
  MOVE_DIVISION,
  PHASES,
  MAX_POKEMON_TEAM,
  MEMO_STATS,
  KEYBOARD_BUTTONS,
  MAX_WORDLE_TRIES,
};