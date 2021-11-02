//FACTORY FUNCTIONS - FUNÇÕES CRIADORAS

//ERROR MESSAGE
function createErrorMessage(status){
    const mainContainer = document.querySelector('#dynamicListWrapper');
    const dynamicErrorContainer = document.createElement('div');
    dynamicErrorContainer.classList.add('dynamicErrorContainer');
    const opsTextContainer = document.createElement('h3');
    opsTextContainer.classList.add('errorTextMessage');
    dynamicErrorContainer.append(opsTextContainer);
    const opsText = document.createTextNode('OOOOPS!');
    opsTextContainer.appendChild(opsText);
    const somethingWentWrongContainer = document.createElement('h3');
    somethingWentWrongContainer.classList.add('errorTextMessage');
    dynamicErrorContainer.append(somethingWentWrongContainer);
    const somethingWentWrong = document.createTextNode('ALGO DEU ERRADO NA SUA BUSCA.');
    somethingWentWrongContainer.appendChild(somethingWentWrong);
    const errorMessageContainer = document.createElement('h3');
    errorMessageContainer.classList.add('errorStatusMessage');
    dynamicErrorContainer.append(errorMessageContainer);
    const errorMessage = document.createTextNode(`status ${status}`);
    errorMessageContainer.appendChild(errorMessage);
    const tryAgainContainer = document.createElement('h3');
    tryAgainContainer.classList.add('errorTextMessage');
    dynamicErrorContainer.append(tryAgainContainer);  
    const tryAgain = document.createTextNode('POR FAVOR, TENTE NOVAMENTE.');
    tryAgainContainer.appendChild(tryAgain);  
}

//DYNAMIC ASIDE BUTTON
function createAsideButton(cityAndState){
    const asideButtonWrapper = document.querySelector('#dynamicAsideButtonWrapper');
    const asideButton = document.createElement('button');
    asideButton.classList.add('dynamicButtonInAside');
    asideButtonWrapper.append(asideButton);
    const inputSearch = document.createTextNode(cityAndState);
    asideButton.appendChild(inputSearch);
}

///DYNAMIC BUTTON IN MAIN
function createMainButton(cityAndState){
    const mainButtonWrapper = document.querySelector('#dynamicButtonInMainWrapper');
    const mainButton = document.createElement('button');
    mainButton.classList.add('dynamicButtonInMain');
    mainButtonWrapper.append(mainButton);
    const inputSearch = document.createTextNode(cityAndState);
    mainButton.appendChild(inputSearch);
}

//DYNAMIC PARAGRAPH - MAIN
function createNumberOfListingsParagraph(numberOfListings,cityAndState){
    const divParagraphContainer = document.querySelector('#dynamicParagraphWrapper');
    const paragraphInMain = document.createElement('p');
    paragraphInMain.classList.add('paragraphInMain');
    divParagraphContainer.append(paragraphInMain);
    //DYNAMIC SPAN IN PARAGRAPH
    const paragraphSpan = document.createElement('span');
    paragraphSpan.classList.add('boldNumberSpan');
    const cityAndStateText = document.createTextNode(numberOfListings);
    paragraphSpan.appendChild(cityAndStateText);
    paragraphInMain.append(paragraphSpan);
    const paragraphText = document.createTextNode(` Imóveis a venda em ${cityAndState}`);
    paragraphInMain.appendChild(paragraphText); 
}

//DYNAMIC LIST OF LISTINGS

function createListOfListings(street, streetNumber, neighborhood, cityAndState, name, totalAreas, bedrooms, bathrooms, parkingSpaces, amenities, price, monthlyCondoFee, image){
    //DYNAMIC LIST ELEMENT
    const divListingContainer = document.querySelector('#dynamicListWrapper');
    const listingCard = document.createElement('li');
    listingCard.classList.add('listingsContainer');
    divListingContainer.append(listingCard);

    //DYNAMIC LIST DIV IMAGE CONTAINER
    const listingImageContainer = document.createElement('div');
    listingImageContainer.classList.add('listingImageContainer');
    listingCard.append(listingImageContainer);
    //LISTING IMAGE
    const listingImage = document.createElement('img');
    listingImage.src=image;
    listingImage.classList.add('listingImage');
    listingImageContainer.append(listingImage);

    //DYNAMIC LIST DIV TEXT CONTAINER
    const listingTextContainer = document.createElement('div');
    listingTextContainer.classList.add('listingDetailsContainer');
    listingCard.append(listingTextContainer);
    //TEXT ELEMENTS - ADDRESS
    const listingAddress = document.createElement('p');
    listingAddress.classList.add('listingCharacteristics');
    listingTextContainer.append(listingAddress);
    const addressText = document.createTextNode( `${street}, ${streetNumber} - ${neighborhood}, ${cityAndState}`);
    listingAddress.appendChild(addressText); 
    //TEXT ELEMENTS - DESCRIPTION
    const listingDescription = document.createElement('h4');
    listingDescription.classList.add('listingDescription');
    listingTextContainer.append(listingDescription);
    const descriptionText = document.createTextNode(name);
    listingDescription.appendChild(descriptionText); 
    //TEXT ELEMENTS - NUMBER OF ROOMS, M², ETC
    const listingCharacteristics = document.createElement('p');
    listingCharacteristics.classList.add('listingCharacteristicNumbers');
    listingTextContainer.append(listingCharacteristics);
    const characteristicsText = document.createTextNode( `${totalAreas} m² ${bedrooms} Quartos  ${bathrooms} Banheiros  ${parkingSpaces} Vagas`);
    listingCharacteristics.appendChild(characteristicsText); 
    const totalAreasText = document.createElement('span');
    //TEXT ELEMENTS - AMENITIES CONTAINER
    const listingAmenitiesContainer = document.createElement('ul');
    listingAmenitiesContainer.classList.add('listingAmenitiesContainer');
    listingTextContainer.append(listingAmenitiesContainer);
    //TEXT ELEMENTS - AMENITIES 
    amenities.forEach((amenity) => {
        const listingAmenities = document.createElement('li');
        listingAmenities.classList.add('amenitiesElement');
        listingAmenitiesContainer.append(listingAmenities);
        const amenitiesText = document.createTextNode(amenity);
        listingAmenities.appendChild(amenitiesText);
        return listingAmenitiesContainer
    })
    //TEXT ELEMENTS - PRICE
    const listingPrice = document.createElement('span');
    listingPrice.classList.add('boldNumberSpan');
    listingTextContainer.append(listingPrice);
    const priceText = document.createTextNode(`R$${price}`);
    listingPrice.appendChild(priceText); 
    //TEXT ELEMENTS - CONDO FEE
    const condoFee = document.createElement('span');
    condoFee.classList.add('listingCharacteristics');
    listingTextContainer.append(condoFee);
    const condoFeeText = document.createTextNode('Condomínio: ');
    condoFee.appendChild(condoFeeText); 
    //TEXT ELEMENTS - SPAN IN CONDO FEE SPAN
    if(!monthlyCondoFee)return 
        {
        const condoFeePrice = document.createElement('span');
        condoFeePrice.classList.add('boldNumberSpan');
        condoFee.append(condoFeePrice);
        const condoFeePriceText = document.createTextNode(`R$${monthlyCondoFee}`);
        condoFeePrice.appendChild(condoFeePriceText);
        }
}

export { createAsideButton, createMainButton, createNumberOfListingsParagraph, createListOfListings, createErrorMessage }
