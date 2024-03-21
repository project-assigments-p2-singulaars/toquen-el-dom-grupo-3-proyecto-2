import { AppElement } from "./app-element";

export class ParentElement extends HTMLElement{

  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(){
    
    const appElement = new AppElement();

    // this.shadow.innerHTML = /* html */`
    //   <div class="parent-el">
    //     <h3>Parent Element</h3>
    //     <slot name="app-element"></slot>
    //   </div>
    // `;

    this.shadow.innerHTML = /* html */`
      <div class="parent-el">
        <h3>Parent Element</h3>
        ${ appElement && this.shadow.appendChild(appElement) }
      </div>
    `;

  }

}

customElements.define('parent-element', ParentElement);