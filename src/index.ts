import { type FighterData, type KingData } from "./Type.js";
import type Character from "./classes/Character/Character.js";
import Fighter from "./classes/Fighter/Fighter.js";
import King from "./classes/King/King.js";
import App from "./components/App/App.js";
import Container from "./components/container/Container.js";
import List from "./components/list/List.js";
import { characters } from "./data/data.js";

const classCharacters = characters.map((character) => {
  switch (character.class) {
    case "King":
      return new King(character as KingData);
    case "Fighter":
      return new Fighter(character as FighterData);
    default:
      return undefined;
  }
});

const list = new List(
  undefined,
  "characters-list row list-unstyled",
  classCharacters as Character[],
);

const container = new Container(undefined, "div", "container", [list]);

const body = document.querySelector("body");

const app = new App(body as HTMLElement, container);

app.reder();
