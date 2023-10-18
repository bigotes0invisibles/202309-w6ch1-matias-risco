import type Character from "./classes/Character/Character";
import type Fighter from "./classes/Fighter/Fighter";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  img: string;
  class: "Fighter" | "King" | "Adviser" | "Squire";
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
