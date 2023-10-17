import Component from "../components/Component.js";
import type List from "../list/List.js";

class Container extends Component {
  list;

  constructor(parentElement: HTMLElement, className: string, list?: List) {
    super(parentElement, "div", className);
    if (list !== undefined) {
      this.list = list;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected populate(): void {}
}

export default Container;
