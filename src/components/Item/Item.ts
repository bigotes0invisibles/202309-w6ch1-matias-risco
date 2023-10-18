import type Character from "../../classes/Character/Character";
import Card from "../Card/Card.js";
import Component from "../Component.js";

class Item extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private readonly data: Character,
  ) {
    super(parentElement, "li", className);
  }

  protected populate(): void {
    const card = new Card(this.element, this.data);
    card.reder();
  }
}

export default Item;
