function translateAmenitiesToPortuguese(amenities) {
    //createAmenitiesArray(amenities)
    const translateToPortuguese = {
        PARTY_HALL: 'Salão de Festas',
        FURNISHED: 'Mobiliado',
        FIREPLACE: 'Lareira',
        POOL: 'Piscina',
        BARBECUE_GRILL: 'Churrasqueira',
        AIR_CONDITIONING: 'Ar Condicionado',
        ELEVATOR: 'Elevador',
        BICYCLES_PLACE: 'Bicicletário',
        GATED_COMMUNITY: 'Condomínio Fechado',
        PLAYGROUND: 'Parquinho',
        SPORTS_COURT: 'Área de Esportes',
        PETS_ALLOWED: 'Animais Permitidos',
        AMERICAN_KITCHEN: 'Cozinha Americana',
        TENNIS_COURT: 'Quadra de Tennis',
        LAUNDRY: 'Lavanderia',
        GYM: 'Academia',
        CINEMA: 'Cinema',
        SAUNA: 'Sauna',
        GARDEN: 'Jardim',
        ELECTRONIC_GATE: 'Portão Elétrico'
    } 
    return amenities.map((amenity) => {
        const portugueseAmenity = translateToPortuguese[amenity]
        if (!portugueseAmenity) return amenity.toLowerCase().replace(/_/g, " ")
        return portugueseAmenity
    })
}

export {translateAmenitiesToPortuguese}