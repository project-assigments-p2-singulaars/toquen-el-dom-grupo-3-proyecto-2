

export class ToggleButton extends HTMLElement{

  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.legendState = true;
  }

  static get observedAttributes(){
    return [];
  }

  connectedCallback(){
    this.shadowRoot.innerHTML = /* html */`
      <div class="key-shortcuts">
        <input type="checkbox"><span>Legend & Shortcuts</span>
      </div>
    `;

    this.shadow.querySelector('input').addEventListener('change', this.sendEvent.bind(this));
  }


  sendEvent( e ){
    if( e.type == 'change'){

      e.target.checked ? this.legendState = true : this.legendState = false;
  
      const eventData = new CustomEvent('keyboardLegendState', {
        detail: this.legendState,
        bubbles: true,
        composed: true
      });
  
      this.dispatchEvent( eventData );
    }
  }

}


window.customElements.define('toggle-button', ToggleButton);