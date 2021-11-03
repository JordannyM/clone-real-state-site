function removeDynamicHtml(){

    {
        const deleteAsideButton = document.querySelector('.dynamicButtonInAside');
        deleteAsideButton.remove();
        const deleteDynamicButtonInMain = document.querySelector('.dynamicButtonInMain');
        deleteDynamicButtonInMain.remove();
        const deleteDynamicParagraph = document.querySelector('.paragraphInMain');
        deleteDynamicParagraph.remove();
        const deleteListOfListings = document.querySelectorAll('.listingsContainer');
        deleteListOfListings.forEach((elem) => elem.remove());
    }
}

export {removeDynamicHtml}

//const deleteDynamicErrorContainer = document.querySelector('.dynamicErrorContainer');
//deleteDynamicErrorContainer.remove();




