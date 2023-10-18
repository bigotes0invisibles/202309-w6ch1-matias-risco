import { type KingData, type CharacterData, type FighterData } from "../Type";

export const characters: CharacterData[] = [];

const joffrey: KingData = {
  family: "Casa Baratheon de Desembarco",
  age: 13,
  img: "joffrey.jpg",
  name: "Joffrey",
  yearsOfReign: 1,
  class: "King",
};

characters.push(joffrey);

const jaime: FighterData = {
  name: "Jaime",
  family: "Lannister",
  age: 40,
  img: "jaime.jpg",
  dexterity: 7,
  weapon: "sword",
  class: "Fighter",
};

characters.push(jaime);

const daenerys: FighterData = {
  name: "Daenerys",
  age: 26,
  family: "Casa Targaryen",
  img: "daenerys.jpg",
  dexterity: 9,
  weapon: "spear",
  class: "Fighter",
};

characters.push(daenerys);
