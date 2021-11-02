import fetchListings from './request-methods.js'

const saoPaulo = ['sp','SP','São Paulo','Sao Paulo','sao paulo','Sao Paulo','Sao paulo','São paulo','são paulo']
const rioDeJaneiro = ['rj','RJ','Rio de Janeiro','Rio de janeiro','rio de janeiro']

function LookForSearchInputInDictionaries(input){
    try{
        saoPaulo.map(function(x){
            if(input===x){ 
            const state = 'sp'
            const city = 'sao-paulo'
            return fetchListings(state,city)
            }
        })
        rioDeJaneiro.map(function(x){
            if(input===x) {
            const state = 'rj'
            const city = 'rio-de-janeiro'
            return fetchListings(state,city)
            }
        })
        fetchListings()
    }
    catch(error){
        console.log('ERROR: city dictionary function', error)
    }
}

export { LookForSearchInputInDictionaries }