const CUSTOM_ELEMENT_NAME = 'sk-full-size-form-container'

export class FullSizeFormContainer extends HTMLElement {

    static get observedAttributes() {
        return ['slide']
    }

    constructor() {
        super()

        const template = document.getElementById(CUSTOM_ELEMENT_NAME)
        const templateContent = template.content
        const shadow = this.attachShadow( { mode: 'open' } )
        shadow.appendChild(templateContent.cloneNode(true))
        const slide = parseInt(this.getAttribute('slide'), 10)
        shadow.styleSheets[0].cssRules[0].style.setProperty('--slide', slide)        
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, FullSizeFormContainer)