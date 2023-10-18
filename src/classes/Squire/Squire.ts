import Character from "../classes/Character/Character.js";
import { type SquireData } from "../Type.js";

class Squire extends Character {
  fighterServed;
  nepotismDegree;

  constructor(data: SquireData) {
    super(data);
    const { fighterServed, nepotismDegree } = data;

    this.fighterServed = fighterServed;

    if (nepotismDegree < 0 || nepotismDegree > 10) {
      throw Error(
        "Error: squire class nepotismDegree is not a number between 0 and 10",
      );
    }

    this.nepotismDegree = nepotismDegree;
  }

  communicate() {
    return "Soy un loser";
  }
}

export default Squire;
