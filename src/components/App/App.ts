import Component from "../Component";

class App extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly childcomponent: Component,
  ) {
    super(parentElement, "div", "app");
  }

  protected populate(): void {
    this.childcomponent.setParentElement(this.element);
  }
}

export default App;
