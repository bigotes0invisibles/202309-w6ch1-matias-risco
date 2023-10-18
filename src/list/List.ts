import type Character from "../Character/Character.js";
import Item from "../Item/Item.js";
import Component from "../components/Component.js";

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
