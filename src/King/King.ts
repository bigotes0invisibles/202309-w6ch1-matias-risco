import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  constructor(name: string, family: string, age: number, yearsOfReign: number) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return "Vais a morir todos";
  }
}

export default King;
