const template = document.createElement('template');
template.innerHTML = `
<style>
  .modal-background {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  .modal-content {
    height: 400px;
    width: 600px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .buttons-wrapper {
    display: flex;
  }

  .modal-button {
    margin: 20px;
  }

  button {
    padding: 12px;
  }
</style>
  
<div class="modal-background">
  <div class="modal-content">
    <h2 id="modal-message"></h2>
    <div class="buttons-wrapper">
      <button class="modal-button">Yes</button>
      <button class="modal-button">Cancel</button>
    </div>
  </div>
</div>
`;

class Modal extends HTMLElement{
  constructor(){
    super();
    this._optionClicked = null;
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#modal-message').innerText = this.getAttribute('message');
  }
}

window.customElements.define('custom-modal', Modal);