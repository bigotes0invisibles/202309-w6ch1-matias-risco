import Component from "../Component.js";
class Container extends Component {
  constructor(
    parentElement: HTMLElement,
    tagElement: string,
    className: string,
    private readonly childComponents: Component[],
  ) {
    super(parentElement, tagElement, className);
  }

  protected populate(): void {
    this.childComponents.forEach((component: Component) => {
      component.setParentElement(this.element);
      component.reder();
    });
  }
}

export default Container;
