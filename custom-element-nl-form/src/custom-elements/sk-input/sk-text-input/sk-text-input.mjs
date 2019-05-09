const CUSTOM_ELEMENT_NAME = 'sk-text-input'

export class TextInput extends HTMLElement {
    constructor() {
        super()
        const template = document.getElementById(CUSTOM_ELEMENT_NAME).content
        const shadow = this.attachShadow( { mode: 'open' } )
        shadow.appendChild(
            template.cloneNode(true)
        )
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, TextInput)