import Component from "../components/Component.js";

class List extends Component {
  constructor(parentElement: HTMLElement, className: string) {
    super(parentElement, "ul", className);
  }

  protected populate(): void {}
}

export default List;
