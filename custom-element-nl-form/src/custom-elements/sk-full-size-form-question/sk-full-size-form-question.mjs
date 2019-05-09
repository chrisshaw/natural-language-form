const CUSTOM_ELEMENT_NAME = 'sk-full-size-form-question'

export class FormQuestion extends HTMLElement {
    static get observedAttributes() {
        return [
            'question',
            'type',
            'answer-options'
        ]
    }

    constructor() {
        super()
        const template = document.getElementById(CUSTOM_ELEMENT_NAME).content
        const shadow = this.attachShadow( { mode: 'open' } )
        const view = template.cloneNode(true)
        shadow.appendChild(view)
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, FormQuestion)