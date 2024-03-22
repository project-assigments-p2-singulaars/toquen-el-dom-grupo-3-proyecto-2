import styles from './carrousel-card.css' assert { type: 'css' };

export class CarrouselCard extends HTMLElement{
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.title;
    this.link;
    this.image;
    this.altImage;
  }

  static get observedAttributes(){
    return ['title', 'link', 'image', 'alt-image'];
  }

  connectedCallback(){
    this.shadow.adoptedStyleSheets.push( styles );
    this.shadow.innerHTML = /* html */`
      <div class="cards__card">
        <a href=${ this.link } target="_blank">
          <img class="card__image" src=${ this.image } alt=${ this.altImage } >
        </a>
        <p class="card__title">${ this.title }</p>
      </div>
    `;
  }

  attributeChangedCallback( name, oldValue, newValue ){
    switch( name ){
      case 'title':
        this.title = newValue;
        break;
      case 'link':
        this.link = newValue;
        break;
      case 'image':
        this.image = newValue;
        break;
      case 'alt-image':
        this.altImage = newValue;
        break;
    }
  }

}


window.customElements.define('carrousel-card', CarrouselCard);