import bugTexture from 'assets/img/pokemon_card/card_types/bug_texture.png';
import colorlessTexture from 'assets/img/pokemon_card/card_types/colorless_texture.png';
import darknessTexture from 'assets/img/pokemon_card/card_types/darkness_texture.png';
import dragonTexture from 'assets/img/pokemon_card/card_types/dragon_texture.png';
import fireTexture from 'assets/img/pokemon_card/card_types/fire_texture.png';
import flyingTexture from 'assets/img/pokemon_card/card_types/flying_texture.png';
import ghostTexture from 'assets/img/pokemon_card/card_types/ghost_texture.png';
import grassTexture from 'assets/img/pokemon_card/card_types/grass_texture.png';
import groundTexture from 'assets/img/pokemon_card/card_types/ground_texture.png';
import iceTexture from 'assets/img/pokemon_card/card_types/ice_texture.png';
import lightningTexture from 'assets/img/pokemon_card/card_types/lightning_texture.png';
import metalTexture from 'assets/img/pokemon_card/card_types/metal_texture.png';
import poisonTexture from 'assets/img/pokemon_card/card_types/poison_texture.png';
import psychicTexture from 'assets/img/pokemon_card/card_types/psychic_texture.png';
import rockTexture from 'assets/img/pokemon_card/card_types/rock_texture.png';
import waterTexture from 'assets/img/pokemon_card/card_types/water_texture.png';
import fairyTexture from 'assets/img/pokemon_card/card_types/fairy_texture.png';
import normalTexture from 'assets/img/pokemon_card/card_types/normal_texture.png';
import fightingTexture from 'assets/img/pokemon_card/card_types/fighting_texture.png';
import defaultTexture from 'assets/img/pokemon_card/card_types/default_texture.png';

export const CARD_TEXTURES = {
  bug: { texture: bugTexture, color: '#889704' },
  colorless: { texture: colorlessTexture, color: '#e1e1e1' },
  dark: { texture: darknessTexture, color: '#26302c' },
  dragon: { texture: dragonTexture, color: '#73733a' },
  fire: { texture: fireTexture, color: '#F56628' },
  fairy: { texture: fairyTexture, color: '#5247b3' },
  flying: { texture: flyingTexture, color: '#86653b' },
  fighting: { texture: fightingTexture, color: '#d0bf75' },
  ghost: { texture: ghostTexture, color: '#383065' },
  grass: { texture: grassTexture, color: '#C0E878' },
  ground: { texture: groundTexture, color: '#683f1e' },
  ice: { texture: iceTexture, colo: '#e6fdf0' },
  electric: { texture: lightningTexture, color: '#f9df4c' },
  steel: { texture: metalTexture, color: '#b4b5aa' },
  normal: { texture: normalTexture, color: '#D0D0AF' },
  poison: { texture: poisonTexture, color: '#688f7b' },
  psychic: { texture: psychicTexture, color: '#b866c4' },
  rock: { texture: rockTexture, color: '#9f9a83' },
  water: { texture: waterTexture, color: '#4490E2' },
  default: { texture: defaultTexture, color: '#D0D0AF' },

  unknown: { texture: defaultTexture, color: '#' },
  shadow: { texture: defaultTexture, color: '#' },
};

export const CARD_TEXTURE_TYPES = {
  bug: 'bug',
  colorless: 'colorless',
  dark: 'dark',
  dragon: 'dragon',
  fighting: 'fighting',
  flying: 'flying',
  fairy: 'fairy',
  ghost: 'ghost',
  grass: 'grass',
  ground: 'ground',
  ice: 'ice',
  electric: 'electric',
  normal: 'normal',
  metal: 'metal',
  poison: 'poison',
  psychic: 'psychic',
  rock: 'rock',
  steel: 'steel',
  water: 'water',
  default: 'default',

  unknown: 'unknown',
  shadow: 'shadow',
};
