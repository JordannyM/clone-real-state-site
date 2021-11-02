import { createAsideButton, createMainButton, createNumberOfListingsParagraph, createListOfListings } from './factory-functions.js'
import {translateAmenitiesToPortuguese} from './amenities-dictionary.js'

function callAllFactoryFunctions(response){
    const listOfListings = response.result.listings
        try{
            const numberOfListings = response.totalCount
            const city = response.result.listings[0].listing.address.city
            const state = response.result.listings[0].listing.address.stateAcronym
            const cityAndState = `${city} - ${state}`
            createAsideButton(cityAndState)
            createMainButton(cityAndState)
            createNumberOfListingsParagraph(numberOfListings,cityAndState)
            listOfListings.reduce((acc,value)=>{
                const name = value.link.name
                const street = value.link.data.street
                const streetNumber = value.link.data.streetNumber
                const neighborhood = value.link.data.neighborhood
                const bathrooms = value.listing.bathrooms
                const totalAreas = value.listing.usableAreas
                const bedrooms = value.listing.bedrooms
                const parkingSpaces = value.listing.parkingSpaces
                const amenitiesArray = value.listing.amenities
                const amenities= translateAmenitiesToPortuguese(amenitiesArray)
                const price = value.listing.pricingInfos[0].price
                const monthlyCondoFee = value.listing.pricingInfos[0].monthlyCondoFee
                const image = value.medias[0].url
                createListOfListings(street, streetNumber, neighborhood, cityAndState, name, totalAreas, bedrooms, bathrooms, parkingSpaces, amenities, price, monthlyCondoFee, image)
                })
            }
    catch(error){
        console.log(error)
    }
}

export { callAllFactoryFunctions }