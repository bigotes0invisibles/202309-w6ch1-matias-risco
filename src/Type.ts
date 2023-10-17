import type Character from "./Character/Character";
import type Fighter from "./Fighter/Fighter";

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

export interface SquireData extends CharacterData {
  fighterServed: Fighter;
  nepotismDegree: number;
}
