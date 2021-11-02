//REQUISIÇÕES HTTP
import {callAllFactoryFunctions} from './call-all-factory-functions.js'
import {createErrorMessage} from './factory-functions.js'

async function fetchListings(state,city) {
    try {
        const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`
        const data = await fetch(url)
        const json = await data.json()
        const response = await json.search
        console.log(await response)
        return callAllFactoryFunctions(await response)
    }
    catch(error){
        createErrorMessage(error.message.status)
    }   
}

export default fetchListings



