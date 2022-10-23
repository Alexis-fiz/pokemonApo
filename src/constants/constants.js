export const PHASES = {
  PLAYER1_MOVE_CHOICE: 'Player one is choosing their move',
  PLAYER2_MOVE_CHOICE: 'Player two is choosing their move',
  BATTLE_PHASE: 'Battle phase',
  SWITCH_POKEMON1: 'Player one is switching their pokemon',
  SWITCH_POKEMON2: 'Player two is switching their pokemon',
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

export default {
  TYPE_TO_IMG, MAX_STATS, TYPE_WEAKNESS_TABLE, MOVE_DIVISION, PHASES, MAX_POKEMON_TEAM,
};
