import { KeyboardKey } from "../Key/keyboard-key.js";
import styles from './keyboard-octave.css' assert { type: 'css' };

  export class KeyboardOctave extends HTMLElement {

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.octave;
      this.keys;
    }

    static get observedAttributes(){
      return ['octave'];
    }

    connectedCallback() {
      this.shadow.adoptedStyleSheets.push( styles );
      this.render();
    }

    getFirstOctaveKeys(){
      return [
        {
          shortcut: 'Q',
          note: 'Do',
          soundSrc: './src/assets/audio/piano/21.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: '2',
          note: 'Sos1',
          soundSrc: './src/assets/audio/piano/22.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'W',
          note: 'Re',
          soundSrc: './src/assets/audio/piano/23.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: '3',
          note: 'Sos2',
          soundSrc: './src/assets/audio/piano/24.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'E',
          note: 'Mi',
          soundSrc: './src/assets/audio/piano/25.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: 'R',
          note: 'Fa',
          soundSrc: './src/assets/audio/piano/26.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: '5',
          note: 'Sos3',
          soundSrc: './src/assets/audio/piano/27.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'T',
          note: 'Sol',
          soundSrc: './src/assets/audio/piano/28.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: '5',
          note: 'Sos4',
          soundSrc: './src/assets/audio/piano/29.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'T',
          note: 'La',
          soundSrc: './src/assets/audio/piano/30.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: '6',
          note: 'Sos5',
          soundSrc: './src/assets/audio/piano/31.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'Y',
          note: 'Si',
          soundSrc: './src/assets/audio/piano/32.mp3',
          keyType: 'whiteKey'
        }
      ]
    }

    getSecondOctaveKeys(){
      return [
        {
          shortcut: 'U',
          note: 'Do',
          soundSrc: './src/assets/audio/piano/33.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: '8',
          note: 'Sos1',
          soundSrc: './src/assets/audio/piano/34.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'I',
          note: 'Re',
          soundSrc: './src/assets/audio/piano/35.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: '9',
          note: 'Sos2',
          soundSrc: './src/assets/audio/piano/36.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'O',
          note: 'Mi',
          soundSrc: './src/assets/audio/piano/37.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: 'Z',
          note: 'Fa',
          soundSrc: './src/assets/audio/piano/38.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: 'S',
          note: 'Sos3',
          soundSrc: './src/assets/audio/piano/39.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'X',
          note: 'Sol',
          soundSrc: './src/assets/audio/piano/40.mp3',
          keyType: 'whiteKey',
        },
        {
          shortcut: 'D',
          note: 'Sos4',
          soundSrc: './src/assets/audio/piano/41.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'C',
          note: 'La',
          soundSrc: './src/assets/audio/piano/42.mp3',
          keyType: 'whiteKey'
        },
        {
          shortcut: 'F',
          note: 'Sos5',
          soundSrc: './src/assets/audio/piano/43.mp3',
          keyType: 'blackKey'
        },
        {
          shortcut: 'V',
          note: 'Si',
          soundSrc: './src/assets/audio/piano/44.mp3',
          keyType: 'whiteKey'
        }
      ]
    }

    getOctave( octave ){
      let keys;

      switch( octave ){
        case '1':
          keys = this.getFirstOctaveKeys();
          break;
        case '2':
          keys = this.getSecondOctaveKeys();
          break;
      }

      let octaveTemplate = ``;

      keys.forEach( key => {

        const keyTemplate = /* html */`
          <keyboard-key 
            shortcut='${key.shortcut}' 
            note='${key.note}' 
            sound-src='${key.soundSrc}' 
            key-type='${key.keyType}' 
          >
          </keyboard-key>
        `;

        octaveTemplate += keyTemplate;

      });

      return octaveTemplate;
    }

    render() {

      this.shadow.innerHTML = /* html */`
        <ul class="octave" id="octave--${this.octave}">
          ${ this.getOctave( this.octave ) }
        </ul>
      `;
    }


    attributeChangedCallback(name, oldValue, newValue) {

      switch(name){
        case 'octave':
          this.octave = newValue;
          break;
      }

    }

  }

  window.customElements.define('keyboard-octave', KeyboardOctave);