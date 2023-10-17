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

  public die() {
    this.alive = false;
  }

  public abstract communicate(): string;
}

export default Character;
