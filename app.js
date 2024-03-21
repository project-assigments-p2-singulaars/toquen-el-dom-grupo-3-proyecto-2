import { KeyboardKey } from "./src/components/Keyboard/Key/keyboard-key.js";

document.addEventListener('DOMContentLoaded', initApp);

function initApp(){

  /* COMPONENTE TECLA */

  const keys = [
    {
      shortcut: 'Q',
      note: 'Do',
      soundSrc: './src/assets/audio/piano/100.mp3'
    },
    {
      shortcut: 'W',
      note: 'Re',
      soundSrc: './src/assets/audio/piano/101.mp3'
    },
    {
      shortcut: 'E',
      note: 'Mi',
      soundSrc: './src/assets/audio/piano/102.mp3'
    }
  ]


  const renderKeys = ( keys ) => {

    keys.forEach( key => {
      const keyEl = new KeyboardKey();
      keyEl.setAttribute('shortcut', key.shortcut);
      keyEl.setAttribute('note', key.note);
      keyEl.setAttribute('sound-src', key.soundSrc);
      
      document.body.appendChild(keyEl);
    });

  }

  renderKeys( keys );


}