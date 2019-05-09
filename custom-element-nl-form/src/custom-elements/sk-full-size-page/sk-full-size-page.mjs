const CUSTOM_ELEMENT_NAME = 'sk-full-size-page'

export class FullSizePage extends HTMLElement {
    constructor() {
        super()
        const template = document
                            .getElementById(CUSTOM_ELEMENT_NAME)
                            .content
        const shadow = this.attachShadow( { mode: 'open' } )
        shadow.appendChild(
            template.cloneNode(true)
        )
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, FullSizePage)