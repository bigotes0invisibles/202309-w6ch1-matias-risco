import type Character from "../../classes/Character/Character";
import Component from "../Component.js";

class Card extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly data: Character,
  ) {
    super(parentElement, "article", "character");
  }

  protected populate(): void {
    const { name, family, age, alive, img } = this.data;

    this.element.innerHTML = `
      <div class="card character__card">
        <img src="img/${img}" alt="${name} ${family}" class="character__picture card-img-top" />
        <div class="card-body">
          <h2 class="character__name card-title h4">${name} ${family}</h2>
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
    `;
  }
}

export default Card;
