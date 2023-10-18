import Character from "../classes/Character/Character";
import { type AdviserData } from "../Type";

class Adviser extends Character {
  adviseCharacter;

  constructor(data: AdviserData) {
    super(data);
    this.adviseCharacter = data.adviseCharacter;
  }

  communicate() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Adviser;
