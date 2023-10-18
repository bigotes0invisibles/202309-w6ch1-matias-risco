import type Character from "../../classes/Character/Character";
import Card from "../Card/Card";
import Component from "../Component";

class Item extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private readonly data: Character,
  ) {
    super(parentElement, "ul", className);
  }

  protected populate(): void {
    const card = new Card(this.element, this.data);
    card.reder();
  }
}

export default Item;
