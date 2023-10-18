import { type CharacterData } from "../../Type";
abstract class Character {
  name;
  family;
  age;
  alive: boolean;
  show: string;
  img;

  constructor(data: CharacterData) {
    this.name = data.name;
    this.family = data.family;
    this.age = data.age;
    this.alive = true;
    this.show = "Juego de tronos";
    this.img = data.img;
  }

  public die() {
    this.alive = false;
  }

  public abstract communicate(): string;
}

export default Character;
