import Component from "../Component.js";

class App extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly childcomponent: Component,
  ) {
    super(parentElement, "div", "app");
  }

  protected populate(): void {
    this.childcomponent.setParentElement(this.element);
    this.childcomponent.reder();
  }
}

export default App;
