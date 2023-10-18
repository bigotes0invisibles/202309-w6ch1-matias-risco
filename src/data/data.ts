import { type KingData, type CharacterData, type FighterData } from "../Type";

const characters: CharacterData[] = [];

const joffrey: KingData = {
  family: "Casa Baratheon de Desembarco",
  age: 13,
  img: "./img/joffrey.jpg",
  name: "Joffrey",
  yearsOfReign: 1,
};

characters.push(joffrey);

const jaime: FighterData = {
  name: "Jaime",
  family: "Lannister",
  age: 40,
  img: "./img/jaime.jpg",
  dexterity: 7,
  weapon: "sword",
};

characters.push(jaime);

const daenerys: FighterData = {
  name: "Daenerys",
  age: 26,
  family: "Casa Targaryen",
  img: "./img/daenerys.jpg",
  dexterity: 9,
  weapon: "spear",
};

characters.push(daenerys);
