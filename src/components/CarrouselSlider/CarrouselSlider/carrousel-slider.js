import styles from './carrousel-slider.css' assert { type: 'css' };

export class CarrouselSlider extends HTMLElement{
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(){
    return [];
  }

  connectedCallback(){

    this.shadow.adoptedStyleSheets.push( styles );
    this.shadow.innerHTML = /* html */`
      <section class="cards">
        <slot></slot>
      </section>
    `;
  }

  attributeChangedCallback(){

  }

}


window.customElements.define('carrousel-slider', CarrouselSlider);