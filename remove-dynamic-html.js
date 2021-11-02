function removeDynamicHtml(){

    {
        const deleteAsideButton = document.querySelectorAll('.dynamicButtonInAside');
        deleteAsideButton.remove();
        const deleteDynamicButtonInMain = document.querySelectorAll('.dynamicButtonInMain');
        deleteDynamicButtonInMain.remove();
        const deleteDynamicParagraph = document.querySelectorAll('.paragraphInMain');
        deleteDynamicParagraph.remove();
        const deleteListOfListings = document.querySelectorAll('.listingsContainer');
        deleteListOfListings.remove();  
        const deleteImageContainer = document.querySelectorAll('.listingImageContainer');
        deleteImageContainer.remove(); 
        const deleteImage = document.querySelectorAll('.listingImage');
        deleteImage.remove();   
        const deleteDetailsContainer = document.querySelectorAll('.listingDetailsContainer');
        deleteDetailsContainer.remove(); 
        const deleteCharacteristics = document.querySelectorAll('.listingCharacteristics');
        deleteCharacteristics.remove(); 
        const deleteCharacteristicsNumbers = document.querySelectorAll('.listingCharacteristicNumbers');
        deleteCharacteristicsNumbers.remove(); 
        const deleteAmenitiesContainer = document.querySelectorAll('.listingAmenitiesContainer');
        deleteAmenitiesContainer.remove(); 
        const deleteNumberSpan = document.querySelectorAll('.boldNumberSpan');
        deleteNumberSpan.remove(); 
    }
}

export {removeDynamicHtml}

//const deleteDynamicErrorContainer = document.querySelector('.dynamicErrorContainer');
//deleteDynamicErrorContainer.remove();




