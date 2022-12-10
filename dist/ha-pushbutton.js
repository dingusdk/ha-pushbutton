import {
  LitElement,
  html,
  css,
  property,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";


class TestPushButton extends LitElement {

  constructor() {
    super();

    this.stateObj == null;
  }

  render() {
    return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
          :host { line-height: inherit;}
      </style>
        <div class='button ${this.isPressed() ? "pressed" : ""}' @mousedown=${this.onMouseDown} @mouseup=${this.onMouseUp}>${this.config.name}
        </div>
    `;
  }


  static get styles() {
    return css`
      :host {
        background-color: #fafafa;
        padding: 16px;
        display: block;
      }
      .button {
        display: inline-block;
        background-color: lightgray;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid darkgray;
        cursor: pointer;
      }
      .pressed {
        background-color: lightblue;
        border: 2px solid darkgray;
      }
    `;
  }


  static get properties() {
    return {
      hass: {
        type: Object
      },
      config: Object,
    }
  }


  setConfig(config) {
    this.config = config;
  }

  updated(changedProps) {

    this.stateObj = this.hass.states[this.config.entity];
    console.log(this.stateObj);
  }


  isPressed() {

    this.stateObj = this.hass.states[this.config.entity];
    return this.stateObj.state == "on";
  }


  async onMouseDown(e) {
    await this.hass.callService("homeassistant", "turn_on", {
      entity_id: this.stateObj.entity_id,
    });
  }


  async onMouseUp(e) {
    await this.hass.callService("homeassistant", "turn_off", {
      entity_id: this.stateObj.entity_id,
    });
  }

  get
}

customElements.define('test-push-button', TestPushButton);

