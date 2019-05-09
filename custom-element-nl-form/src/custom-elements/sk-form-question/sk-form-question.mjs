const CUSTOM_ELEMENT_NAME = 'sk-form-question'

export class FormQuestion extends HTMLElement {
    static get observedAttributes() {
        return ['data-question', 'type', 'answer-options']
    }

    constructor() {
        super()
        const template = document.getElementById(CUSTOM_ELEMENT_NAME).content
        const shadow = this.attachShadow( { mode: 'open' } )
        shadow.appendChild(
            template.cloneNode(true)
        )
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, FormQuestion)