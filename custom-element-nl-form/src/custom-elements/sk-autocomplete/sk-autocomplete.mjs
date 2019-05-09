import { Service } from "magicomplete";

const CUSTOM_ELEMENT_NAME = 'sk-autocomplete'

class Autocomplete extends HTMLElement {
    static get observedAttributes() {
        return []
    }

    constructor() {
        super()
        
    }


}

customElements.define(CUSTOM_ELEMENT_NAME, Autocomplete)