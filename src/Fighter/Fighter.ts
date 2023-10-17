import Character from "../Character/Character.js";
import { type FighterData } from "../Type.js";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(data: FighterData) {
    super(data);
    this.weapon = data.weapon;
    const { dexterity } = data;

    if (dexterity < 0 || dexterity > 10) {
      throw Error(
        "Error: fighter class dexterity is not a number between 0 and 10",
      );
    }

    this.dexterity = dexterity;
  }

  public communicate(): string {
    return "Primero pego y luego pregunto";
  }
}
export default Fighter;
