

export class AppElement extends HTMLElement {

  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(){
    this.shadow.innerHTML = /* html */`
      <div>
        <p>Hello my friend <slot name="span-global">unknown</slot>!</p>
      </div>
    `;

  }

}

customElements.define('app-element', AppElement);