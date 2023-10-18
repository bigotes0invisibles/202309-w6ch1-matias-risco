import Character from "../Character/Character.js";
import { type KingData } from "../../Type.js";
class King extends Character {
  yearsOfReign;

  constructor(data: KingData) {
    super(data);
    this.yearsOfReign = data.yearsOfReign;
  }

  communicate() {
    return "Vais a morir todos";
  }
}

export default King;
