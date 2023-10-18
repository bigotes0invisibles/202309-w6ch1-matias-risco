import type Character from "../../classes/Character/Character";
import Component from "../Component";

class Item extends Component {
  data;

  constructor(parentElement: HTMLElement, className: string, data: Character) {
    super(parentElement, "ul", className);
    this.data = data;
  }

  protected populate(): void {
    const { age, family, img, name, alive } = this.data;
    this.element.innerHTML = `
        <article class="character">
          <div class="card character__card">
            <img src="${img}" alt="${name} of ${family}" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${name} of ${family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-${alive ? "up" : "down"}"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
    `;
  }
}

export default Item;
