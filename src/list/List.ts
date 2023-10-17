import Component from "../components/Component.js";

class List extends Component {
  constructor(parentElement: HTMLElement, className: string) {
    super(parentElement, "ul", className);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected populate(): void {}
}

export default List;
