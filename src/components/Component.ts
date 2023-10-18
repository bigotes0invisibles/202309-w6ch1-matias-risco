abstract class Component {
  protected element: HTMLElement;

  constructor(
    private parentElement: HTMLElement | undefined,
    tagElement: string,
    className: string,
  ) {
    this.element = document.createElement(tagElement);
    this.element.className = className;
  }

  setParentElement(parentElement: HTMLElement) {
    this.parentElement = parentElement;
  }

  reder() {
    if (this.parentElement === undefined) {
      throw Error("there is no parent Element");
    }

    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}
export default Component;
