//EVENT LISTENERS 

import { LookForSearchInputInDictionaries } from './city-dictionaries.js'
import { removeDynamicHtml } from './remove-dynamic-html.js'

const searchField = document.querySelector("#searchField")

searchField.addEventListener('blur', (evt) => {
    const input = evt.target.value.trim()
    try{
        LookForSearchInputInDictionaries(input)
    }
    catch(err){
        console.log('ERROR: search input event listener', err.message)
    }
})

const asideButton = document.querySelector('#dynamicAsideButtonWrapper')
const mainButton = document.querySelector('#dynamicButtonInMainWrapper')

asideButton.addEventListener('click', (evt) => {
    console.log(evt)
    removeDynamicHtml()
})

mainButton.addEventListener('click', (evt) => {
    console.log(evt)
    removeDynamicHtml()
})

//event listener p apagar td qd: procurar outra cidade, ou clicar no x de qualquer um dos dois botões










