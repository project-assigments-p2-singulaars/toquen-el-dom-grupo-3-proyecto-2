import { KeyboardOctave } from "../Octave/keyboard-octave.js";
import { ToggleButton } from "../../ToggleButton/toggle-button.js";
import styles from './keyboard-ted.css' assert { type: 'css' };

export class KeyboardTed extends HTMLElement{
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.octaves;
  }

  static get observedAttributes(){
    return ['octaves'];
  }

  connectedCallback(){
    this.shadow.adoptedStyleSheets.push( styles );
    this.render();
  }

  render(){

    let octavesTemplate = ``;

    for(let i = 1; i <= this.octaves; i++){
      octavesTemplate += /* html */`
        <keyboard-octave 
          octave='${i}'>
        </keyboard-octave>
      `;
    }

    this.shadow.innerHTML = /* html */`
      <section id="keyboard_base">
        <div id="kebyboard_base_buttons">
          <toggle-button></toggle-button>
        </div>
        <div id="piano-keys">
          ${octavesTemplate}
        </div>
      </section>
    `;
    
  }

  attributeChangedCallback( name, oldValue, newValue ){

    switch( name ){
      case 'octaves':
        this.octaves = parseInt(newValue);
    }

  }


}

window.customElements.define('keyboard-ted', KeyboardTed);