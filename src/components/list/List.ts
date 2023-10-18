import type Character from "../../classes/Character/Character.js";
import Component from "../Component.js";
import Item from "../Item/Item.js";

class List extends Component {
  data;
  constructor(
    parentElement: HTMLElement,
    className: string,
    data: Character[],
  ) {
    super(parentElement, "ul", className);
    this.data = data;
  }

  protected populate(): void {
    this.data.forEach((character) => {
      const item = new Item(this.element, "col", character);
      item.reder();
    });
  }
}

export default List;
