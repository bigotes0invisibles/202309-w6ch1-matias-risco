abstract class Character {
  name;
  family;
  age;
  alive: boolean;
  show: string;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
    this.show = "Juego de tronos";
  }

  die() {
    this.alive = false;
  }
}

export default Character;
