import type Character from "./Character/Character";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface AdviserData extends CharacterData {
  adviseCharacter: Character;
}
