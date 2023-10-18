abstract class Component {
  protected element: HTMLElement;
  private parentElement;

  constructor(
    parentElement: HTMLElement,
    tagElement: string,
    className: string,
  ) {
    this.parentElement = parentElement;
    this.element = document.createElement(tagElement);
    this.element.className = className;
  }

  setParentElement(parentElement: HTMLElement) {
    this.parentElement = parentElement;
  }

  reder() {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}
export default Component;
