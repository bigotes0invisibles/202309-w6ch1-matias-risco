import Component from "../components/Component.js";

class Container extends Component {
  constructor(parentElement: HTMLElement, className: string) {
    super(parentElement, "div", className);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected populate(): void {}
}

export default Container;
