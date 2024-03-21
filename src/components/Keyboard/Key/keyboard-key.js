
  export class KeyboardKey extends HTMLElement {

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.shortcut;
      this.note;
      this.soundSrc;
    }

    static get observedAttributes(){
      return ['shortcut', 'note', 'sound-src'];
    }

    playSound( e ){

      if( e.type == 'keypress' && e.key.toUpperCase() == this.shortcut.toUpperCase() ){
        console.log('key pressed');
        console.log( e.key, this.note );

        const sound = new Audio( this.soundSrc );
        sound.play();

        return;
      } else if( e.type == 'click' ){
        console.log('key clicked' + e);
        const sound = new Audio( this.soundSrc );
        sound.play();
      }

    }

    connectedCallback() {
      this.render();
      
      let key = this.shadow.querySelector('.octave__key-white');
      key.addEventListener('click', this.playSound.bind( this ));
      document.addEventListener('keypress', this.playSound.bind( this ));
    }

    disconnectedCallback() {
      // console.log('Custom element removed from page.');
    }

    adoptedCallback() {
      // console.log('Custom element moved to new page.')
    }

    render() {
      this.shadow.innerHTML = /* html */`
        <style>
          :host {
            --color-black: black;
            --color-white: white;
          }

          .octave__key-white{
            display: flex;
            width: 50px;
            height: 150px;
            background-color: var(--color-white);
            border: 2px solid var(--color-black)
          }

        </style>


        <div class='octave__key-white' data-note=${this.note}>
          <p class='test'>Test</p>
          <span class='key__shortcut'>${this.shortcut}</span>
          <span class='key__note'>${this.note}</span>
        </div>
      `;
    }

    attributeChangedCallback(name, oldValue, newValue) {

      switch(name){
        case 'shortcut':
          this.shortcut = newValue;
          break;
        case 'note':
          this.note = newValue;
          break;
        case 'sound-src':
          this.soundSrc = newValue;
          break;
      }
    }

  }

  window.customElements.define('keyboard-key', KeyboardKey);