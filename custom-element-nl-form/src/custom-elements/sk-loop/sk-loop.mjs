const CUSTOM_ELEMENT_NAME = 'sk-loop'

const QUESTIONS = [
    {
        question: 'Paste the text of your job description',
        type: 'textarea',
        options: null
    },
    {
        question: "Here's another test",
        type: 'text',
        options: null
    }
]

export class Loop extends HTMLElement {
    static get observedAttributes() {
        return ['items', 'item-element', 'set-attributes']
    }

    constructor() {
        super()
        const shadow = this.attachShadow( { mode: 'open' } )
        const questionList = QUESTIONS.reduce( (fragment, questionObj) => {
            const { question, type, options } = questionObj
            const item = document.createElement('sk-full-size-form-question')
            item.setAttribute('question', question)
            fragment.appendChild(item)
            return fragment
        }, document.createDocumentFragment() )
        shadow.appendChild(questionList)
    }
}

customElements.define(CUSTOM_ELEMENT_NAME, Loop)